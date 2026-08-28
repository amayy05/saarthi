import React from 'react';
import '../../components.css';

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
