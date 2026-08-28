import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Simulator() {
  const [principal, setPrincipal] = useState(400000);
  const [rate, setRate] = useState(6);
  const [tenure, setTenure] = useState(5); // years

  // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const calculateEMI = () => {
    const P = principal;
    const R = rate / 12 / 100;
    const N = tenure * 12;
    if (P === 0 || R === 0 || N === 0) return { emi: 0, totalInterest: 0, totalAmount: 0 };
    
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;
    
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  };

  const results = calculateEMI();
  
  // Calculate width for simple bar graph
  const principalPercent = (principal / results.totalAmount) * 100 || 0;
  const interestPercent = (results.totalInterest / results.totalAmount) * 100 || 0;

  return (
    <div className="container mt-8">
      <h2 className="mb-4">Financial Simulator</h2>
      <p className="text-muted mb-6">Estimate your indicative repayment burden.</p>
      
      <div className="grid md-grid-2 gap-6">
        <Card>
          <h3 className="mb-4">Loan Details</h3>
          <Input 
            label="Loan Amount (₹)" 
            type="number" 
            value={principal} 
            onChange={(e) => setPrincipal(Number(e.target.value))} 
          />
          <Input 
            label="Interest Rate (% p.a.)" 
            type="number" 
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))} 
            step="0.1"
          />
          <Input 
            label="Tenure (Years)" 
            type="number" 
            value={tenure} 
            onChange={(e) => setTenure(Number(e.target.value))} 
          />
          <p className="text-small text-muted mt-4">
            Lower tenure → higher EMI, lower total interest.
          </p>
        </Card>
        
        <Card>
          <h3 className="mb-2">Estimated EMI</h3>
          <div className="text-display text-primary font-bold mb-6">₹{results.emi.toLocaleString()} <span className="text-h3 text-muted">/ month</span></div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-muted">Total Principal</span>
              <span className="font-bold">₹{principal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-muted">Total Interest</span>
              <span className="font-bold">₹{results.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t mt-2">
              <span className="font-bold">Total Repayment</span>
              <span className="font-bold">₹{results.totalAmount.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="chart-bar mt-6">
            <div className="flex h-4 rounded overflow-hidden">
              <div style={{ width: `${principalPercent}%`, backgroundColor: 'var(--primary)' }}></div>
              <div style={{ width: `${interestPercent}%`, backgroundColor: 'var(--secondary)' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-small">
              <div className="flex align-center gap-1"><span className="w-2 h-2 rounded bg-primary inline-block"></span> Principal</div>
              <div className="flex align-center gap-1"><span className="w-2 h-2 rounded bg-secondary inline-block"></span> Interest</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
