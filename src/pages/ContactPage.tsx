import React from 'react';
import { Mail, Clock, CheckCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
import { analytics } from '../services/analytics';

const ContactPage: React.FC = () => {
  const { trackEngagement } = useAnalytics('Contact - NestWise Support');

  const handleEmailClick = () => {
    analytics.trackCTAClick('Email Support', 'Send Email Now', 'Contact Page');
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Help Fast</h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Need assistance? Our expert support team is here to help you maximize your REPS compliance and tax savings.
          </p>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Support team helping clients"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>



      {/* Contact Us Directly */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to get started or have questions? We're here to help you succeed with REPS compliance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-6">Email Us Directly</h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Send us your questions, concerns, or feedback. Our REPS compliance audit reports are standing by to help you maximize your tax savings.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <span className="text-2xl font-bold text-primary">support@nestwise.us</span>
              </div>
              

            </div>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:support@nestwise.us?subject=REPS Compliance Question"
                onClick={handleEmailClick}
                className="block bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📧 Send Email Now
              </a>
              
              <div className="text-sm text-gray-500">
                This will open your email client with our support address
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                REPS Compliance Audit Reports
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Personalized Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-600">
              Get started with these popular resources while you wait for our response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'REPS Qualification Guide',
                description: 'Step-by-step guide to qualifying for REPS status',
                icon: '📋',
                link: '#'
              },
              {
                title: 'Time Tracking Best Practices',
                description: 'How to properly log and categorize your hours',
                icon: '⏱️',
                link: '#'
              },
              {
                title: 'Audit Preparation Checklist',
                description: 'Everything you need for a successful IRS audit',
                icon: '✅',
                link: '#'
              },
              {
                title: 'Tax Savings Calculator',
                description: 'Estimate your potential REPS tax savings',
                icon: '🧮',
                link: '#'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <span
                  className="text-accent font-semibold opacity-75 cursor-default"
                >
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;