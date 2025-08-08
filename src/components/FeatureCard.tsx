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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 text-center ${className}`}>
      <div className="mb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mx-auto mb-6">
          <IconComponent className="w-12 h-12 text-accent" />
        </div>
        <h3 className="text-3xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;