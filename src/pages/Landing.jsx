import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './pages.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="container mt-8 text-center">
        <h1 className="hero-title mb-4">
          Find the right scheme.<br />
          Find the right partner.
        </h1>
        
        <p className="hero-subtitle mb-8">
          Answer a few simple questions. SAARTHI-SC helps you discover suitable financing options, 
          understand repayment, locate an appropriate partner, and prepare your documents.
        </p>

        <div className="hero-actions mb-8">
          <Button variant="primary" onClick={() => navigate('/onboarding')} className="btn-large">
            Find My Scheme
          </Button>
          <Button variant="secondary" onClick={() => navigate('/matches')} className="btn-large">
            Explore Schemes
          </Button>
        </div>

        <Card className="how-it-works-card mx-auto">
          <h3>How it works</h3>
          <div className="steps-row mt-4">
            <div className="step-item">
              <div className="step-number">1</div>
              <span>Tell us</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <span>Match</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <span>Plan</span>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">4</div>
              <span>Apply</span>
            </div>
          </div>
        </Card>

        <p className="mt-8 text-muted">
          Trusted guidance | Indicative results | Multilingual
        </p>
      </div>
    </div>
  );
}
