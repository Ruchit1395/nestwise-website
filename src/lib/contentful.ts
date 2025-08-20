// Lazy initialization of Contentful client
let client: any = null;
let isInitializing = false;

const initializeClient = async () => {
  if (client || isInitializing) return client;
  
  isInitializing = true;
  
  try {
    const { createClient } = await import('contentful');
    
    const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
    const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

    console.log('Contentful Environment Variables:', {
      spaceId: spaceId || 'MISSING',
      accessToken: accessToken ? `${accessToken.substring(0, 10)}...` : 'MISSING',
      envMode: import.meta.env.MODE
    });

    if (!spaceId || !accessToken) {
      console.error('Contentful environment variables are missing');
      return null;
    }

    client = createClient({
      space: spaceId,
      accessToken: accessToken,
    });
    
    console.log('Contentful client initialized successfully');
    return client;
  } catch (error) {
    console.error('Failed to initialize Contentful client:', error);
    return null;
  } finally {
    isInitializing = false;
  }
};

// Export a function that gets the client when needed
export const getContentfulClient = () => {
  if (!client) {
    return initializeClient();
  }
  return Promise.resolve(client);
};

export default getContentfulClient;
