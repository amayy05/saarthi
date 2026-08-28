import React from 'react';
import { Check } from 'lucide-react';
import '../../components.css';

export function Stepper({ steps, currentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        
        return (
          <div key={index} className={`step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
            <div className="step-circle">
              {isCompleted ? <Check size={16} /> : (index + 1)}
            </div>
            <span className="step-label">{step}</span>
          </div>
        );
      })}
    </div>
  );
}
