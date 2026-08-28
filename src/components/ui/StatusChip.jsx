import React from 'react';
import '../../components.css';

export function StatusChip({ status, icon, children, className = '' }) {
  // Map status to css class modifier
  const statusMap = {
    eligible: 'success',
    available: 'success',
    completed: 'success',
    verify: 'warning',
    recommended: 'info',
    unavailable: 'error',
    missing: 'error'
  };
  
  const type = statusMap[status.toLowerCase()] || 'info';

  return (
    <span className={`chip chip-${type} ${className}`}>
      {icon && <span className="chip-icon">{icon}</span>}
      {children}
    </span>
  );
}
