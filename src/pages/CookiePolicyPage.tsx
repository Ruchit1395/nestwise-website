import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">Nestwise</p>
          <p className="text-gray-500">Effective Date: August 19, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
            <p className="text-gray-700 mb-8">
              When you visit our website, we or our third-party partners may store or retrieve information on your browser, 
              mainly through cookies. We use this information to make the site function as you expect, to track analytics and 
              provide a more personalized web experience, to personalize ads and measure the success of our marketing campaigns 
              and similar activities as described in our Privacy Notice.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Do Not Sell or Share My Personal Information</h2>
            <p className="text-gray-700 mb-8">
              Under certain privacy laws, you have the right to direct a business not to "sell" or "share" your personal 
              information, including for targeted advertising purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Learn More About Our Privacy Practices</h2>
            <p className="text-gray-700 mb-8">
              To learn more about our privacy practices, please visit our{' '}
              <a href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Cookie Policy, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="font-semibold text-gray-800">NestWise LLC</p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@nestwise.us" className="text-primary hover:text-primary/80">support@nestwise.us</a>
              </p>
              <p className="text-gray-700">
                Website: <a href="https://www.nestwise.us" className="text-primary hover:text-primary/80">https://www.nestwise.us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
