import React from 'react';
import { Target, BarChart3, FileText, Bell, CheckCircle, TrendingUp } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const detailedFeatures = [
    {
      icon: Target,
      title: 'IRS-Compliant Time Logging',
      description: 'Comprehensive time tracking system designed specifically for REPS compliance with pre-loaded IRS categories.',
      benefits: [
        'Pre-loaded IRS activity categories',
        'Smart time suggestions based on patterns',
        'Mobile and desktop tracking',
        'Automatic sync across devices',
        'Bulk time entry capabilities',
        'Activity templates for common tasks'
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Compliance Dashboard',
      description: 'Live monitoring of your REPS qualification status with visual indicators and progress tracking.',
      benefits: [
        'Real-time REPS qualification status',
        'Visual progress indicators',
        'Hours remaining alerts',
        'Qualification projections',
        'Monthly and yearly summaries',
        'Trend analysis and insights'
      ],
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FileText,
      title: 'Professional Audit Reports',
      description: 'Generate comprehensive, audit-ready reports that CPAs and the IRS trust and accept.',
      benefits: [
        'CPA-approved formatting',
        'One-click PDF generation',
        'Detailed activity breakdowns',
        'Audit trail documentation',
        'Custom report templates',
        'Export to Excel and other formats'
      ],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bell,
      title: 'Smart Reminder System',
      description: 'Intelligent notification system that ensures you never miss critical hours or important deadlines.',
      benefits: [
        'Customizable reminder schedules',
        'Multi-channel notifications',
        'Deadline countdown alerts',
        'Weekly progress summaries',
        'Smart suggestion algorithms',
        'Integration with calendar apps'
      ],
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Built for REPS Success</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Every feature designed with one goal: ensuring your REPS compliance and maximizing your tax savings.
          </p>
          
          {/* Feature Comparison Visual */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-red-400 text-4xl font-bold mb-2">Manual Tracking</div>
                <ul className="text-left space-y-2 text-gray-300">
                  <li>• Spreadsheet chaos</li>
                  <li>• Missing documentation</li>
                  <li>• Audit failures</li>
                  <li>• Lost tax savings</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-accent text-4xl font-bold mb-2">NestWise LLC</div>
                <ul className="text-left space-y-2 text-gray-200">
                  <li>• Automated compliance</li>
                  <li>• Complete documentation</li>
                  <li>• Audit-ready reports</li>
                  <li>• Maximum tax benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {detailedFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`mb-20 ${index === detailedFeatures.length - 1 ? 'mb-0' : ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:col-start-1' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">{feature.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}>
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">The Numbers Don't Lie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">$45,000</div>
              <div className="text-gray-600">Average REPS Tax Savings</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">750+</div>
              <div className="text-gray-600">Hours Tracked Automatically</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-gray-600">Audit Success Rate</div>
            </div>
          </div>
          
          <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Start Your Success Story Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;