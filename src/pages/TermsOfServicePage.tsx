import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Terms of Use</h1>
          <p className="text-xl text-gray-600">Nestwise</p>
          <p className="text-gray-500">Effective Date: August 19, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Introduction and Overview</h2>
            <p className="text-gray-700 mb-8">
              Welcome to Nestwise LLC ("Nestwise", "Company", "we", or "us"). These Terms of Use ("Terms") govern your use of 
              our website (<a href="https://www.nestwise.us" className="text-primary hover:text-primary/80">https://www.nestwise.us</a>), 
              mobile applications ("Apps"), and related services (collectively, the "Service"). By accessing or using our Service, 
              you agree to these Terms and our Privacy Policy. If you do not agree, you must discontinue use immediately.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Use of Service</h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Service only for lawful purposes and in compliance with these Terms. You will not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Use the Service for unlawful, abusive, or harmful activities</li>
              <li>Interfere with the Service's operation or security</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Attempt to reverse engineer or modify the Service</li>
              <li>Misrepresent your identity or impersonate others</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">User Accounts</h2>
            <p className="text-gray-700 mb-8">
              To access certain features, you may be required to create an account. You agree to provide accurate, complete, and 
              updated information. You are responsible for safeguarding your password and for any activities under your account.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Subscriptions and Payments</h2>
            <p className="text-gray-700 mb-8">
              Some features require a paid subscription. Subscriptions automatically renew unless cancelled. Fees are billed in 
              advance based on the selected plan. Except where required by law, fees are non-refundable. We may change fees with 
              reasonable prior notice. If you do not agree, you may cancel your subscription.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-8">
              All content, trademarks, logos, designs, and technology provided through the Service are the property of Nestwise 
              or our licensors. Subject to these Terms, we grant you a limited, personal, non-transferable, and revocable license 
              to use the Service for your personal, non-commercial purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">User Content</h2>
            <p className="text-gray-700 mb-8">
              By submitting content (e.g., comments, feedback, uploads) through the Service, you grant Nestwise a worldwide, 
              royalty-free, perpetual license to use, reproduce, distribute, and display such content for purposes of operating 
              and improving the Service. You represent that you have the rights to share such content and that it does not 
              infringe third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-8">
              The Service may contain links to third-party websites, services, or advertisements. Nestwise does not endorse or 
              control third-party services and is not responsible for their content or practices. Use of third-party services 
              is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-8">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or 
              implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or 
              non-infringement. Nestwise does not guarantee that the Service will be error-free or uninterrupted.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-8">
              To the maximum extent permitted by law, Nestwise shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Service. 
              Our total liability shall not exceed the amount you paid to Nestwise in the 12 months preceding the claim, or $50, 
              whichever is greater.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Termination</h2>
            <p className="text-gray-700 mb-8">
              We may suspend or terminate your access to the Service at any time for violation of these Terms or other reasons. 
              Upon termination, your right to use the Service ceases immediately.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Governing Law & Dispute Resolution</h2>
            <p className="text-gray-700 mb-8">
              These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any 
              disputes arising under these Terms shall be resolved through binding arbitration in Delaware, except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-8">
              We may update these Terms from time to time. Updates will be posted on our website, and continued use of the Service 
              after changes indicates your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us at:
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

export default TermsOfServicePage;
