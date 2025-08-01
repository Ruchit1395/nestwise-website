import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
      tier.popular ? 'ring-2 ring-accent scale-105' : ''
    }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
        <p className="text-gray-600 mb-6">{tier.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">${tier.price}</span>
          <span className="text-gray-500 ml-2">/{tier.period}</span>
        </div>
        
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          tier.popular
            ? 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-primary hover:bg-gray-200'
        }`}>
          {tier.cta}
        </button>
        
        <ul className="mt-8 space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;