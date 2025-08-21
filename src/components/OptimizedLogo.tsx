import React from 'react';

interface OptimizedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const OptimizedLogo: React.FC<OptimizedLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20'
  };

  return (
    <img
      src="/logo-optimized.svg"
      alt="NestWise LLC"
      className={`${sizeClasses[size]} ${className} object-contain`}
      loading="eager"
      decoding="async"
    />
  );
};

export default OptimizedLogo;
