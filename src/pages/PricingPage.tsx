import React, { useState } from 'react';
import { TrendingUp, Check, Star, HelpCircle } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import { pricingTiers } from '../data/pricing';
import { faqs } from '../data/faqs';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const adjustedTiers = pricingTiers.map(tier => ({
    ...tier,
    price: isAnnual ? Math.round(tier.price * 12 * 0.8) : tier.price,
    period: isAnnual ? 'year' : 'month'
  }));

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Invest in Peace of Mind</h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Stop risking tens of thousands in tax savings. Choose the plan that protects your investments.
          </p>
          
          {/* ROI Calculator */}
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>
            <div className="text-4xl font-bold mb-2">
              $45,000 <span className="text-xl font-normal">savings</span> vs $348 <span className="text-xl font-normal">cost</span>
            </div>
            <div className="text-accent text-3xl font-bold">
              = 13,000% ROI
            </div>
            <p className="text-gray-200 mt-4">
              Average REPS tax savings vs annual NestWise cost
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    !isAnnual 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all relative ${
                    isAnnual 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {adjustedTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Feature Comparison</h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">Basic</th>
                    <th className="px-6 py-4 text-center relative">
                      Professional
                      <Star className="absolute top-1 right-1 w-4 h-4 text-accent fill-current" />
                    </th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Time Tracking', basic: true, pro: true, enterprise: true },
                    { feature: 'Mobile App', basic: true, pro: true, enterprise: true },
                    { feature: 'Basic Reports', basic: true, pro: false, enterprise: false },
                    { feature: 'Professional Reports', basic: false, pro: true, enterprise: true },
                    { feature: 'Smart Alerts', basic: false, pro: true, enterprise: true },
                    { feature: 'Unlimited Properties', basic: false, pro: true, enterprise: true },
                    { feature: 'CPA Collaboration', basic: false, pro: true, enterprise: true },
                    { feature: 'Priority Support', basic: false, pro: true, enterprise: true },
                    { feature: 'Phone Support', basic: false, pro: false, enterprise: true },
                    { feature: 'Custom Integrations', basic: false, pro: false, enterprise: true },
                    { feature: 'Dedicated Manager', basic: false, pro: false, enterprise: true }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.basic ? (
                          <Check className="w-5 h-5 text-secondary mx-auto" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.pro ? (
                          <Check className="w-5 h-5 text-secondary mx-auto" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-secondary mx-auto" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-accent transition-transform ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-primary mb-8">Your Investment Breakdown</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-500 mb-2">$73K</div>
                <div className="text-gray-600">Lost without tracking</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-2">$348</div>
                <div className="text-gray-600">Annual NestWise cost</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-secondary mb-2">$45K</div>
                <div className="text-gray-600">Protected tax savings</div>
              </div>
            </div>
            
            <button className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-accent/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Protect My Tax Savings Now
            </button>
            
            <p className="mt-6 text-gray-600">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;