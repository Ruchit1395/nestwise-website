import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            How we protect and handle your personal information
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Data Protection</h2>
              </div>
              <p className="text-gray-700 mb-4">
                At NestWise LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our REPS compliance tracking platform.
              </p>

              <div className="flex items-center mb-6 mt-8">
                <Lock className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Account information (name, email, company details)</li>
                <li>• REPS compliance data and documentation</li>
                <li>• Usage analytics and platform interactions</li>
                <li>• Communication records and support requests</li>
              </ul>

              <div className="flex items-center mb-6 mt-8">
                <Eye className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Provide and improve our REPS tracking services</li>
                <li>• Generate compliance reports and documentation</li>
                <li>• Send important updates and notifications</li>
                <li>• Provide customer support and assistance</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your sensitive information.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at{' '}
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

export default PrivacyPolicyPage;
