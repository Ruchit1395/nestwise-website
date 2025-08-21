import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">NestWise LLC</p>
          <p className="text-gray-500">Last updated August 19, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Thank you for choosing to be part of our community at NestWise LLC ("Nestwise", "nestwise", "we", "us", or "our"). 
              We are committed to protecting your personal information and your right to privacy. If you have any questions or 
              concerns about this policy, or our practices regarding your personal information, please contact us at{' '}
              <a href="mailto:support@nestwise.us" className="text-primary hover:text-primary/80">support@nestwise.us</a>.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Scope of this Policy</h2>
            <p className="text-gray-700 mb-8">
              This Privacy Policy applies to all information collected through our website (
              <a href="https://www.nestwise.us" className="text-primary hover:text-primary/80">https://www.nestwise.us</a>), 
              our applications ("nestwise.us"), and any related services, sales, marketing, or events (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect both information you provide to us directly and information collected automatically when you use our Services.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Information You Provide</h3>
                <p className="text-gray-700">
                  Examples include your name, email address, phone number, physical address, account login details, and any other 
                  information you choose to provide when creating an account, contacting support, or interacting with Nestwise.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Information Collected Automatically</h3>
                <p className="text-gray-700">
                  We automatically gather technical and usage data such as IP address, device identifiers, browser type, operating 
                  system, pages viewed, referring/exit pages, and clickstream data. We may use cookies, log files, embedded scripts, 
                  and similar technologies for analytics and personalization.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect for purposes such as:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Providing and personalizing our Services</li>
              <li>Processing payments and fulfilling requests</li>
              <li>Communicating with you about products, features, and updates</li>
              <li>Improving our Services and developing new features</li>
              <li>Monitoring usage, detecting fraud, and enhancing security</li>
              <li>Complying with legal obligations</li>
              <li>Supporting business transfers such as mergers or acquisitions</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Sharing of Information</h2>
            <p className="text-gray-700 mb-8">
              We may share your personal information with trusted third-party service providers, affiliates, and partners who 
              perform services on our behalf (such as payment processing, analytics, and communications). We may also disclose 
              information when required by law, in connection with business transfers, or with your consent.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Advertising & Analytics</h2>
            <p className="text-gray-700 mb-8">
              We work with third parties such as Google Analytics, Firebase, and email service providers to better understand 
              usage of our Services and to deliver relevant advertising. These providers may use cookies or other tracking 
              technologies. Nestwise does not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Your Rights & Choices</h2>
            <p className="text-gray-700 mb-4">
              Depending on where you live, you may have rights under privacy laws such as the California Consumer Privacy Act (CCPA). 
              These rights may include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Right to know what personal data we collect and how it is used</li>
              <li>Right to request deletion of your personal data</li>
              <li>Right to opt out of sale of your personal data (Nestwise does not sell personal data)</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p className="text-gray-700 mb-8">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:support@nestwise.us" className="text-primary hover:text-primary/80">support@nestwise.us</a>.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-8">
              Our Services are not directed to children under 13. We do not knowingly collect personal information from children. 
              If we learn we have collected such information, we will delete it in compliance with the Children's Online Privacy 
              Protection Act (COPPA).
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
            <p className="text-gray-700 mb-8">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, 
              loss, or misuse. However, no method of transmission over the Internet is completely secure. You are responsible 
              for safeguarding your account credentials.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">International Users</h2>
            <p className="text-gray-700 mb-8">
              Our Services are operated in the United States. If you are accessing our Services from outside the U.S., please 
              note that your information will be transferred to and processed in the United States.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-700 mb-8">
              We may update this Privacy Policy from time to time to reflect changes in practices, legal requirements, or other 
              factors. If material changes are made, we will notify you by updating the effective date or providing additional notice.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
