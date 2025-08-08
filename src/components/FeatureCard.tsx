import React from 'react';
import * as Icons from 'lucide-react';
import { FeatureType } from '../types';

interface FeatureCardProps {
  feature: FeatureType;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = '' }) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1 text-center ${className}`}>
      <div className="mb-6">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors mx-auto mb-4">
          <IconComponent className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
          {feature.title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
        {feature.description}
      </p>
      
      <div className="grid grid-cols-1 gap-3">
        {feature.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center justify-center text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
            <span className="font-medium">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;