import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { analytics } from '../services/analytics';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { title, slug, excerpt, featuredImage, category, publishedDate } = post.fields;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleBlogClick = () => {
    analytics.trackBlogInteraction('Blog Post Click', title);
  };

  const imageUrl = featuredImage?.fields?.file?.url 
    ? `https:${featuredImage.fields.file.url}` 
    : '/public/nestwise_logo_teal_cream_bg.png';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {formatDate(publishedDate)}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link
          to={`/blog/${slug}`}
          onClick={handleBlogClick}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
