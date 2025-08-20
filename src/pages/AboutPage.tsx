import React from 'react';
import { Target, Users, TrendingUp, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const missionPoints = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Democratize sophisticated tax strategy tools for every real estate investor, not just the ultra-wealthy.',
    },
    {
      icon: Users,
      title: 'The Problem',
      description: 'Millions of real estate investors lose billions in tax savings due to poor compliance tracking and documentation.',
    },
    {
      icon: TrendingUp,
      title: 'Our Solution',
      description: 'Professional-grade REPS compliance tracking that ensures maximum tax benefits for every investor.',
    },
    {
      icon: Zap,
      title: 'Future Vision',
      description: 'A comprehensive platform that handles all aspects of real estate tax optimization and compliance.',
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Investors Protected' },
    { number: '$180M+', label: 'Tax Savings Secured' },
    { number: '99.7%', label: 'Audit Success Rate' },
    { number: '750+', label: 'Hours Tracked Daily' }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Democratizing Tax Strategy</h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            We believe every real estate investor deserves access to the same professional-grade tax optimization tools used by the ultra-wealthy.
          </p>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team mission"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {missionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{point.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem Infographic */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">The Real Estate Tax Problem</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-6xl font-bold text-red-500 mb-4">73%</div>
              <div className="text-xl font-semibold text-red-700 mb-2">of investors</div>
              <div className="text-gray-600">lose REPS qualification due to poor tracking</div>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200">
              <div className="text-6xl font-bold text-yellow-600 mb-4">$50K</div>
              <div className="text-xl font-semibold text-yellow-700 mb-2">average loss</div>
              <div className="text-gray-600">in tax deductions annually per investor</div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-6xl font-bold text-green-600 mb-4">99.7%</div>
              <div className="text-xl font-semibold text-green-700 mb-2">success rate</div>
                              <div className="text-gray-600">with proper nestwise tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Promise to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four unwavering commitments that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'IRS Compliance',
                description: 'Every feature built to IRS standards and regulations',
                icon: '🛡️'
              },
              {
                title: 'Audit Protection',
                description: 'Bulletproof documentation that stands up to any audit',
                icon: '📋'
              },
              {
                title: 'Maximum Savings',
                description: 'Optimize every possible tax deduction and benefit',
                icon: '💰'
              },
              {
                title: 'Peace of Mind',
                description: 'Sleep soundly knowing your taxes are handled perfectly',
                icon: '😌'
              }
            ].map((promise, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{promise.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{promise.title}</h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Future of Real Estate Tax Strategy</h2>
              <p className="text-xl text-gray-200 mb-8">
                nestwise is just the beginning. We're building the most comprehensive real estate tax optimization platform ever created.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-powered tax optimization recommendations',
                  'Integrated CPA collaboration platform',
                  'Automated entity structure optimization',
                  'Real-time tax law updates and adjustments',
                  'Portfolio-wide tax strategy coordination'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Future vision"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join the Revolution</h2>
          <p className="text-xl text-gray-600 mb-12">
            Be part of the movement that's democratizing professional tax strategy for all real estate investors.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 1</div>
                <div className="text-gray-600">Sign up in 60 seconds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 2</div>
                <div className="text-gray-600">Start tracking immediately</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Step 3</div>
                <div className="text-gray-600">Maximize your tax savings</div>
              </div>
            </div>
            
            <button className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-accent/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Your Success Story Today
            </button>
            
            <p className="mt-6 text-gray-500">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;