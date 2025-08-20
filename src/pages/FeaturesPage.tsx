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
          <div className="relative max-w-6xl mx-auto">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-primary/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Manual Tracking - Left Side */}
                <div className="relative group">
                  {/* Red Warning Icon */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  
                  <div className="text-center pt-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6 group-hover:text-red-700 transition-colors">
                      Manual Tracking
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 text-red-500 group-hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Spreadsheet chaos</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-red-500 group-hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Missing documentation</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-red-500 group-hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Audit failures</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-red-500 group-hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Lost tax savings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-500 to-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-xl">VS</span>
                </div>

                {/* nestwise - Right Side */}
                <div className="relative group">
                  {/* Success Icon with Glow */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="text-center pt-8">
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 group-hover:from-accent group-hover:to-primary transition-all duration-300">
                      nestwise
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 text-primary group-hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Automated compliance</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-primary group-hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Complete documentation</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-primary group-hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Audit-ready reports</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-primary group-hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Maximum tax benefits</span>
                      </div>
                    </div>
                  </div>
                </div>
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