import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'mx-auto';
  
  const sizes = {
    sm: 'max-w-2xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddings = {
    none: '',
    sm: 'px-4 sm:px-6',
    default: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  };

  const containerClasses = `${baseClasses} ${sizes[size]} ${paddings[padding]} ${className}`;

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
