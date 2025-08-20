import client from '../lib/contentful';
import { BlogPost } from '../types/blog';

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    // Check if client is properly configured
    if (!client) {
      throw new Error('Contentful client not configured');
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
    });
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Return empty array instead of throwing to prevent crashes
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    // Check if client is properly configured
    if (!client) {
      throw new Error('Contentful client not configured');
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (response.items.length > 0) {
      return response.items[0] as unknown as BlogPost;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    // Check if client is properly configured
    if (!client) {
      throw new Error('Contentful client not configured');
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.category': category,
      order: ['-fields.publishedDate'],
    });
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
};
