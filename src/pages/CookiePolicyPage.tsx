import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Info } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            How we use cookies to improve your experience
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">What Are Cookies?</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our platform.
              </p>

              <div className="flex items-center mb-6 mt-8">
                <Settings className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">Required for the website to function properly, including authentication and security features.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700">Help us understand how visitors interact with our website to improve performance.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">Remember your preferences and settings to enhance your experience.</p>
                </div>
              </div>

              <div className="flex items-center mb-6 mt-8">
                <Info className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Managing Cookies</h2>
              </div>
              <p className="text-gray-700 mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete them. However, disabling certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services that place cookies on your device. These services help us analyze website traffic, provide customer support, and improve our services.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about our Cookie Policy, please contact us at{' '}
                <a href="mailto:support@nestwise.us" className="text-primary hover:underline">
                  support@nestwise.us
                </a>
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
