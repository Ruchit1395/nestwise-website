import React, { useEffect } from 'react';

const AdminPage: React.FC = () => {
  useEffect(() => {
    // Load Netlify CMS scripts
    const loadNetlifyCMS = () => {
      // Load CMS config first
      const configScript = document.createElement('script');
      configScript.src = '/cms-config.js';
      configScript.onload = () => {
        // Load Netlify Identity widget
        const identityScript = document.createElement('script');
        identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
        identityScript.onload = () => {
          // Load Netlify CMS
          const cmsScript = document.createElement('script');
          cmsScript.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
          cmsScript.onload = () => {
            // Initialize CMS with our config
            if (window.NetlifyCMS && window.CMS_CONFIG) {
              window.NetlifyCMS.init({ config: window.CMS_CONFIG });
            }
          };
          document.body.appendChild(cmsScript);
        };
        document.body.appendChild(identityScript);
      };
      document.body.appendChild(configScript);
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
