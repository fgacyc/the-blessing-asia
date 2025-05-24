import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  ...props 
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50',
    glass: 'bg-white/10 backdrop-blur-sm border border-white/20',
    solid: 'bg-gray-800 border border-gray-700',
    gradient: 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
