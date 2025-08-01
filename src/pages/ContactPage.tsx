import React, { useState } from 'react';
import { Mail, Clock, Book, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Support */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Get detailed help from our REPS compliance experts
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Response time: &lt; 4 hours
                </div>
                <div className="text-accent font-semibold">support@nestwise.com</div>
              </div>
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Send Email
              </button>
            </div>

            {/* Knowledge Base */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Knowledge Base</h3>
              <p className="text-gray-600 mb-6">
                Instant answers to common REPS and tax questions
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600">50+ detailed guides</div>
                <div className="text-sm text-gray-600">Video tutorials</div>
                <div className="text-sm text-gray-600">Step-by-step walkthroughs</div>
              </div>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Browse Articles
              </button>
            </div>

            {/* Premium Support */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border-2 border-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Premium Support</h3>
              <p className="text-gray-600 mb-6">
                Coming soon: Phone & live chat for Enterprise customers
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-600">Priority phone support</div>
                <div className="text-sm text-gray-600">Live chat assistance</div>
                <div className="text-sm text-gray-600">Dedicated account manager</div>
              </div>
              <button className="bg-gray-200 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Have a specific question? Send us a detailed message and we'll get back to you quickly.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {isSubmitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-green-800">Message sent successfully! We'll respond within 4 hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="reps-questions">REPS Compliance Questions</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing & Account</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Please provide as much detail as possible so we can help you effectively..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
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
                <a
                  href={resource.link}
                  className="text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;