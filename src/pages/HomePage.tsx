import React from 'react';
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import StatsBar from '../components/StatsBar';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5849590/pexels-photo-5849590.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Losing Money on 
                <span className="text-accent"> REPS Compliance</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Time is Money. We save you both.
              </p>
              
              <div className="mb-12">
                <StatsBar />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Track My REPS NOW!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                  See Demo
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-primary">REPS Dashboard</h3>
                    <div className="flex items-center text-secondary">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      <span className="text-sm font-semibold">Qualified</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hours Logged</span>
                      <span className="font-bold text-primary">847 / 750</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-secondary h-3 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <div className="text-sm text-gray-500">Status: REPS Qualified ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">The $50,000 Mistake</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real estate investors lose <span className="font-bold text-red-600">$20K-$100K+ in tax deductions annually</span> due to poor REPS compliance tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Spreadsheet Chaos</h3>
                    <p className="text-gray-600">Manual tracking leads to missed hours, lost records, and failed audits.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <blockquote className="text-lg italic text-gray-700">
                  "I lost $73,000 in tax deductions because I couldn't prove my REPS qualification. My spreadsheet wasn't enough."
                </blockquote>
                <footer className="mt-4 text-sm text-gray-500">— Sarah M., Real Estate Investor</footer>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-primary">NestWise Solution</h3>
                  <div className="flex items-center text-secondary">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    <span className="text-sm font-semibold">Protected</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-800">Automatic time tracking</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-800">IRS-compliant documentation</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-800">Audit-ready reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Built for REPS Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful features that protect your tax savings and ensure REPS compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Trusted by Smart Investors</h2>
            <p className="text-xl text-gray-600">
              Join thousands of investors who've secured their REPS qualification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Successful investors celebrating"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
            />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Stop Risking Your Tax Savings</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Join thousands of smart investors who've secured their REPS qualification and maximized their tax benefits.
          </p>
          
          <button className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-accent/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-bounce-subtle">
            Start Tracking Today - Risk Free!
          </button>
          
          <p className="mt-6 text-gray-300">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;