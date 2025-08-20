export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: any; // Rich text from Contentful
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    excerpt: string;
    category: string;
    publishedDate: string;
  };
}

export interface BlogPostFields {
  title: string;
  slug: string;
  content: any;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  excerpt: string;
  category: string;
  publishedDate: string;
}
