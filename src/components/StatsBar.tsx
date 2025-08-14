import React from 'react';
import { Shield, Clock, FileCheck, Target } from 'lucide-react';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Shield,
      label: 'IRS-Compliant',
      value: 'IRS'
    },
    {
      icon: Clock,
      label: 'Setup Time',
      value: 'Quick'
    },
    {
      icon: FileCheck,
      label: 'Audit-Ready',
      value: 'Always'
    },
    {
      icon: Target,
      label: 'Hours',
      value: '750+'
    },
    {
      icon: Shield,
      label: 'Team Tracking',
      value: 'Multi-User'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="relative bg-white/90 rounded-lg p-4 shadow-sm h-24 flex flex-col items-center justify-center">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
              <IconComponent className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center w-full">
              <div className="font-bold text-primary text-sm">{stat.value}</div>
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center w-full">
              <div className="text-xs text-gray-600">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;