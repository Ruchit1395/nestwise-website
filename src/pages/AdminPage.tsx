import React, { useEffect } from 'react';

const AdminPage: React.FC = () => {
  useEffect(() => {
    console.log('AdminPage mounted - starting CMS load process');
    
    // Load Netlify CMS scripts
    const loadNetlifyCMS = () => {
      console.log('Loading Netlify CMS...');
      
      // Load Netlify Identity widget first
      const identityScript = document.createElement('script');
      identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
      identityScript.onload = () => {
        console.log('Identity widget loaded successfully');
        
        // Load Netlify CMS
        const cmsScript = document.createElement('script');
        cmsScript.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
        cmsScript.onload = () => {
          console.log('CMS script loaded successfully');
          
          // Wait a bit for CMS to initialize
          setTimeout(() => {
            if (window.NetlifyCMS) {
              console.log('NetlifyCMS found, initializing...');
              try {
                window.NetlifyCMS.init({
                  config: {
                                    backend: {
                  name: 'git-gateway',
                  branch: 'main',
                  site_id: 'stellular-cajeta-a075ce'
                },
                    local_backend: false,
                    media_folder: 'public/images/blog',
                    public_folder: '/images/blog',
                                    site_url: 'https://stellular-cajeta-a075ce.netlify.app',
                display_url: 'https://stellular-cajeta-a075ce.netlify.app',
                    collections: [
                      {
                        name: 'blog',
                        label: 'Blog Posts',
                        folder: 'src/content/blog',
                        create: true,
                        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
                        fields: [
                          { label: 'Title', name: 'title', widget: 'string' },
                          { label: 'SEO Title', name: 'seoTitle', widget: 'string', required: false },
                          { label: 'SEO Description', name: 'seoDescription', widget: 'text', required: false },
                          { label: 'Keywords', name: 'keywords', widget: 'string', required: false },
                          { label: 'Excerpt', name: 'excerpt', widget: 'text' },
                          { label: 'Content', name: 'body', widget: 'markdown' },
                          { label: 'Author', name: 'author', widget: 'string', default: 'NestWise Team' },
                          { label: 'Publish Date', name: 'date', widget: 'datetime' },
                          { label: 'Featured Image', name: 'thumbnail', widget: 'image', required: false },
                          { label: 'Read Time (minutes)', name: 'readTime', widget: 'number', default: 3 },
                          { label: 'Draft', name: 'draft', widget: 'boolean', default: false }
                        ]
                      }
                    ]
                  }
                });
                console.log('CMS initialization completed successfully');
              } catch (error) {
                console.error('Error initializing CMS:', error);
              }
            } else {
              console.error('NetlifyCMS not found in window object');
            }
          }, 1000);
        };
        cmsScript.onerror = (error) => {
          console.error('Error loading CMS script:', error);
        };
        document.body.appendChild(cmsScript);
      };
      identityScript.onerror = (error) => {
        console.error('Error loading identity script:', error);
      };
      document.body.appendChild(identityScript);
    };

    loadNetlifyCMS();
  }, []);

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">NestWise CMS</h1>
            <p className="text-gray-600 mb-8">Content Management System</p>
            
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Loading Netlify CMS...
              </p>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-xs text-blue-700">
                  <strong>Debug Info:</strong> AdminPage component loaded successfully. 
                  Check browser console for CMS loading progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
