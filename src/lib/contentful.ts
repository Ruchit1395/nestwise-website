import { createClient } from 'contentful';

// Check if environment variables are available
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.error('Contentful environment variables are missing:', {
    spaceId: spaceId ? '✓' : '✗',
    accessToken: accessToken ? '✓' : '✗'
  });
}

const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

export default client;
