import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The terms and conditions for using our platform
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 mb-6">
                By accessing and using NestWise LLC's nestwise REPS compliance tracking platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>

              <div className="flex items-center mb-6 mt-8">
                <CheckCircle className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Service Description</h2>
              </div>
              <p className="text-gray-700 mb-6">
                NestWise LLC provides a professional nestwise REPS compliance tracking platform designed to help real estate investors maintain proper documentation, track compliance requirements, and maximize tax benefits.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">User Responsibilities</h2>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Provide accurate and truthful information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Use the platform in compliance with applicable laws</li>
                <li>• Not attempt to reverse engineer or compromise the platform</li>
              </ul>

              <div className="flex items-center mb-6 mt-8">
                <AlertTriangle className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 mb-6">
                While we strive to provide accurate and reliable information, NestWise LLC is not responsible for any decisions made based on the data provided through our nestwise platform. Users should consult with qualified tax professionals for specific advice.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content, features, and functionality of the nestwise platform are owned by NestWise LLC and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfServicePage;
