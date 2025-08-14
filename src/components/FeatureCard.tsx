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
    <div className={`bg-white rounded-xl shadow-lg border-l-4 border-accent p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary">
          {feature.title}
        </h3>
      </div>
      <p className="text-gray-600">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;