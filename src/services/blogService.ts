import { getContentfulClient } from '../lib/contentful';
import { BlogPost } from '../types/blog';

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const client = await getContentfulClient();
    
    if (!client) {
      console.error('Contentful client not available');
      return [];
    }

    // Try both content types to find the correct one
    let response;
    try {
      response = await client.getEntries({
        content_type: 'blog',
        order: ['-fields.publishedDate'],
      });
      console.log('Found posts with content_type: blog');
    } catch (error) {
      console.log('Trying content_type: blogPost');
      response = await client.getEntries({
        content_type: 'blogPost',
        order: ['-fields.publishedDate'],
      });
    }
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Return empty array instead of throwing to prevent crashes
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const client = await getContentfulClient();
    
    if (!client) {
      console.error('Contentful client not available');
      return null;
    }

    // Try both content types to find the correct one
    let response;
    try {
      response = await client.getEntries({
        content_type: 'blog',
        'fields.slug': slug,
        limit: 1,
      });
    } catch (error) {
      response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      });
    }
    
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
    const client = await getContentfulClient();
    
    if (!client) {
      console.error('Contentful client not available');
      return [];
    }

    // Try both content types to find the correct one
    let response;
    try {
      response = await client.getEntries({
        content_type: 'blog',
        'fields.category': category,
        order: ['-fields.publishedDate'],
      });
    } catch (error) {
      response = await client.getEntries({
        content_type: 'blogPost',
        'fields.category': category,
        limit: 1,
      });
    }
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
};
