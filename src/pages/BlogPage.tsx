import React from 'react';
import { sampleBlogPosts } from '../data/blog';
import BlogCard from '../components/BlogCard';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">REPS Insights & Resources</h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Expert guidance, compliance tips, and industry insights to help you maximize your REPS qualification and tax benefits.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {sampleBlogPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No blog posts yet</h3>
              <p className="text-gray-500">Check back soon for valuable REPS insights and resources.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
