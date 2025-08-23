import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { getBlogPostBySlug } from '../services/blogService';
import { useAnalytics } from '../hooks/useAnalytics';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Analytics will be initialized when post is loaded
  const { trackEngagement } = useAnalytics(post?.fields?.title || 'Blog Post - NestWise');

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderRichText = (content: any) => {
    if (!content || !content.content) return null;

    return content.content.map((node: any, index: number) => {
      if (node.nodeType === 'paragraph') {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {node.content?.map((textNode: any, textIndex: number) => {
              if (textNode.marks?.some((mark: any) => mark.type === 'bold')) {
                return <strong key={textIndex}>{textNode.value}</strong>;
              }
              if (textNode.marks?.some((mark: any) => mark.type === 'italic')) {
                return <em key={textIndex}>{textNode.value}</em>;
              }
              return textNode.value;
            })}
          </p>
        );
      }
      
      if (node.nodeType === 'heading-1') {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
            {node.content?.[0]?.value}
          </h1>
        );
      }
      
      if (node.nodeType === 'heading-2') {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            {node.content?.[0]?.value}
          </h2>
        );
      }
      
      if (node.nodeType === 'heading-3') {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-5">
            {node.content?.[0]?.value}
          </h3>
        );
      }
      
      if (node.nodeType === 'unordered-list') {
        return (
          <ul key={index} className="list-disc list-inside mb-4 text-gray-700">
            {node.content?.map((listItem: any, listIndex: number) => (
              <li key={listIndex} className="mb-2">
                {listItem.content?.[0]?.content?.[0]?.value}
              </li>
            ))}
          </ul>
        );
      }
      
      if (node.nodeType === 'ordered-list') {
        return (
          <ol key={index} className="list-decimal list-inside mb-4 text-gray-700">
            {node.content?.map((listItem: any, listIndex: number) => (
              <li key={listIndex} className="mb-2">
                {listItem.content?.[0]?.content?.[0]?.value}
              </li>
            ))}
          </ol>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-red-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
            <button
              onClick={() => navigate('/blog')}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-200"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { title, content, featuredImage, excerpt, category, publishedDate } = post.fields;
  const imageUrl = featuredImage?.fields?.file?.url 
    ? `https:${featuredImage.fields.file.url}` 
    : '/public/nestwise_logo_teal_cream_bg.png';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              to="/blog"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {category}
            </span>
            <span className="text-white/80">•</span>
            <span className="text-white/80">{formatDate(publishedDate)}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {excerpt && (
            <p className="text-xl opacity-90">{excerpt}</p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-8">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {renderRichText(content)}
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
