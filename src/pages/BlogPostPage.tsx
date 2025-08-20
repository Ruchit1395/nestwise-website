import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { sampleBlogPosts } from '../data/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = sampleBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (content: string) => {
    // Simple markdown rendering for now
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-primary mb-6 mt-8">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-primary mb-4 mt-6">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-primary mb-3 mt-4">{line.substring(4)}</h3>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
        }
        if (line.startsWith('[ ] ')) {
          return <li key={index} className="ml-6 mb-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            {line.substring(4)}
          </li>;
        }
        if (line.trim() === '') {
          return <div key={index} className="mb-4"></div>;
        }
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-neutral-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-neutral-700 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </div>
          
          {post.excerpt && (
            <p className="text-xl text-neutral-700 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {post.featuredImage && (
              <div className="mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="text-gray-700 leading-relaxed">
              {renderMarkdown(post.content)}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
