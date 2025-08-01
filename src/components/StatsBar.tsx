import React from 'react';
import { Shield, Clock, FileCheck, Target } from 'lucide-react';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Shield,
      label: 'IRS-Compliant',
      value: '100%'
    },
    {
      icon: Clock,
      label: 'Setup Time',
      value: '60 Sec'
    },
    {
      icon: FileCheck,
      label: 'Audit-Ready',
      value: 'Always'
    },
    {
      icon: Target,
      label: 'Hour Tracking',
      value: '750+'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="flex items-center justify-center bg-white/90 rounded-lg p-4 shadow-sm">
            <IconComponent className="w-6 h-6 text-accent mr-3" />
            <div>
              <div className="font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;