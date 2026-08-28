import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { StatusChip } from '../components/ui/StatusChip';
import { Button } from '../components/ui/Button';

export default function SchemeMatch() {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-8">
      <h2 className="mb-4">Your best match</h2>
      
      <Card className="mb-8 border-l-4" style={{borderLeft: '4px solid var(--success)'}}>
        <div className="flex justify-between mb-4">
          <StatusChip status="recommended" icon="⭐">Recommended</StatusChip>
          <span className="font-bold text-success">Match score 94%</span>
        </div>
        
        <h3 className="mb-4 text-primary">Term Loan</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className="text-small text-muted">Max financing</div>
            <div className="font-bold">₹5,00,000</div>
          </div>
          <div>
            <div className="text-small text-muted">Interest</div>
            <div className="font-bold">6% p.a.</div>
          </div>
          <div>
            <div className="text-small text-muted">Tenure</div>
            <div className="font-bold">5 years</div>
          </div>
        </div>
        
        <div className="mb-6 bg-gray p-4 rounded">
          <h4 className="mb-2">Why this matches you</h4>
          <ul className="list-disc pl-5">
            <li>✓ Project amount fits the range</li>
            <li>✓ Income condition is satisfied</li>
            <li>✓ Purpose is supported</li>
          </ul>
        </div>
        
        <div className="flex gap-4">
          <Button variant="secondary" className="flex-1" onClick={() => navigate('/matches')}>View Scheme</Button>
          <Button variant="primary" className="flex-1" onClick={() => navigate('/simulator')}>Calculate EMI</Button>
        </div>
      </Card>
      
      <h3 className="mb-4">Other options</h3>
      <Card className="mb-4 opacity-75">
        <div className="flex justify-between mb-2">
          <h4>Micro Finance</h4>
          <StatusChip status="unavailable">Not recommended</StatusChip>
        </div>
        <p className="text-muted mb-4">Project amount is above the configured range.</p>
        <Button variant="tertiary">View Rule</Button>
      </Card>
    </div>
  );
}
