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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary ml-4 group-hover:text-accent transition-colors">
          {feature.title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {feature.description}
      </p>
      
      <ul className="space-y-2">
        {feature.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;