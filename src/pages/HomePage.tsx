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
      <section className="relative bg-gradient-to-br from-secondary to-secondary/80 text-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5849590/pexels-photo-5849590.jpeg?auto=compress&cs=tinysrgb&w=800&format=webp')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Path to REPS 
                <span className="text-blue-800 font-extrabold"> Qualification Starts Here</span>
              </h1>
              <p className="text-xl mb-8 text-neutral-700">
                REPS Tracking Made Simple, Accurate, and IRS-Ready
              </p>
              
              <div className="mb-12">
                <StatsBar />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.nestwise.us" className="bg-cta text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cta/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Track My REPS NOW!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-primary">REPS Dashboard</h3>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      <span className="text-sm font-semibold">IRS Compliant</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hours Tracking</span>
                      <span className="font-bold text-primary">750+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
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
            <h2 className="text-4xl font-bold text-primary mb-6">Your REPS Journey - Simplified and Structured</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Achieving REPS qualification means consistent tracking of your hours in approved activities. Our system is built around IRS guidelines, giving you clarity, confidence, and control over your logs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 h-32">
                <div className="flex items-start h-full">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">Timeliness Issues</h3>
                    <p className="text-gray-600">Delayed tracking leads to forgotten activities and incomplete records.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 h-32">
                <div className="flex items-start h-full">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">Accuracy Problems</h3>
                    <p className="text-gray-600">Manual tracking results in errors and inconsistent categorization.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 h-32">
                <div className="flex items-start h-full">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">Poor Categorization</h3>
                    <p className="text-gray-600">Activities not properly categorized according to IRS guidelines.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 h-32">
                <div className="flex items-start h-full">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">Smart Reminders</h3>
                    <p className="text-gray-600">Constant reminders on app to keep you on track with your REPS activities.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 h-32">
                <div className="flex items-start h-full">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">IRS Categorization</h3>
                    <p className="text-gray-600">Detailed tracking as per IRS categorization guidelines for compliance.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 h-32">
                <div className="flex items-start h-full">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-2">Accurate Logging</h3>
                    <p className="text-gray-600">Timely and accurate logging system for complete REPS documentation.</p>
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
              Powerful features that make REPS qualification achievable for every serious investor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}} />
            ))}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary">Tracking by Team Members</h3>
              </div>
              <p className="text-gray-600">Collaborate with your team to track REPS activities across multiple properties and projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Trusted by Smart Investors</h2>
            <p className="text-xl text-gray-600">
              Join thousands of investors who've achieved REPS qualification with confidence
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
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800&format=webp"
              alt="Successful investors celebrating"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          
                      <h2 className="text-4xl font-bold mb-6">Confidently Qualify for REPS - Without the Hassle</h2>
                                <p className="text-xl mb-8 text-neutral-700 max-w-3xl mx-auto">
            Join smart investors like you who've achieved REPS qualification with our structured, IRS-approved tracking system.
          </p>
          
          <a href="https://app.nestwise.us" className="bg-cta text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-cta/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-bounce-subtle">
            Start Tracking Today - Risk Free!
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;