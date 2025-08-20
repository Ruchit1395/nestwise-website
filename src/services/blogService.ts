import client from '../lib/contentful';
import { BlogPost } from '../types/blog';

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      order: '-fields.publishedDate',
    });
    
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (response.items.length > 0) {
      return response.items[0] as BlogPost;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.category': category,
      order: '-fields.publishedDate',
    });
    
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
};
