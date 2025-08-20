import React from 'react';
import { CheckCircle, TrendingUp, Target, BarChart3, FileText, Bell } from 'lucide-react';

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
        </div>
      </section>

      {/* Feature Comparison Visual */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-red-500 to-primary bg-clip-text text-transparent">Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference between struggling with manual tracking and thriving with automated compliance
            </p>
          </div>

          {/* Main Comparison Container */}
          <div className="relative">
            {/* VS Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-gradient-to-r from-red-500 via-purple-500 to-primary rounded-full p-1 shadow-2xl">
                <div className="bg-white rounded-full px-6 py-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-primary bg-clip-text text-transparent">
                    VS
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Manual Tracking - Left Side */}
              <div className="group relative">
                {/* Floating Warning Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-red-500 text-sm font-bold">!</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                  <span className="text-red-500 text-xs font-bold">×</span>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 lg:p-12 shadow-xl border border-red-200 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Icon with Glow Effect */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-red-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-500">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-red-600 mb-8 text-center group-hover:text-red-700 transition-colors duration-300">
                    Manual Tracking
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      'Spreadsheet chaos',
                      'Missing documentation', 
                      'Audit failures',
                      'Lost tax savings'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-red-50 group-hover:bg-red-100 transition-all duration-300 hover:scale-105">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg font-semibold text-red-700 group-hover:text-red-800 transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="mt-8 text-center">
                    <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ❌ Problem Zone
                    </div>
                  </div>
                </div>
              </div>

              {/* nestwise - Right Side */}
              <div className="group relative">
                {/* Floating Success Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                  <span className="text-accent text-xs font-bold">★</span>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
                  </div>
                  
                  {/* Icon with Glow Effect */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-500 animate-pulse">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-8 text-center group-hover:from-accent group-hover:to-primary transition-all duration-500">
                    nestwise
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      'Automated compliance',
                      'Complete documentation',
                      'Audit-ready reports', 
                      'Maximum tax benefits'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 hover:scale-105 border border-primary/20">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="mt-8 text-center">
                    <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      🚀 Solution Zone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 transform">
                🎯 Ready to Transform Your REPS Journey?
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