import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { StatusChip } from '../components/ui/StatusChip';
import { Button } from '../components/ui/Button';

export default function SchemeMatch() {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state?.profile;
  
  // Check if intent is education/student
  const isEducation = 
    profile?.purpose?.toLowerCase().includes('education') || 
    profile?.purpose?.toLowerCase().includes('student') ||
    profile?.business_type?.toLowerCase().includes('education') ||
    profile?.business_type?.toLowerCase().includes('student');

  // Education scheme data
  const educationScheme = (
    <>
      <div className="flex justify-between mb-4">
        <StatusChip status="recommended" icon="⭐">Recommended</StatusChip>
        <span className="font-bold text-success">Match score 98%</span>
      </div>
      <h3 className="mb-4 text-primary">Educational Loan Scheme</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div><div className="text-small text-muted">Max financing</div><div className="font-bold">₹20,00,000</div></div>
        <div><div className="text-small text-muted">Interest</div><div className="font-bold">4% p.a.</div></div>
        <div><div className="text-small text-muted">Target</div><div className="font-bold">Students</div></div>
      </div>
      <div className="mb-6 bg-gray p-4 rounded">
        <h4 className="mb-2">Why this matches you</h4>
        <ul className="list-disc pl-5">
          <li>✓ You are a student seeking education funding</li>
          <li>✓ Highly subsidized interest rate for SC students</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" className="flex-1" onClick={() => navigate('/matches')}>View Scheme</Button>
        <Button variant="primary" className="flex-1" onClick={() => navigate('/simulator')}>Calculate EMI</Button>
      </div>
    </>
  );

  // Business scheme data
  const businessScheme = (
    <>
      <div className="flex justify-between mb-4">
        <StatusChip status="recommended" icon="⭐">Recommended</StatusChip>
        <span className="font-bold text-success">Match score 94%</span>
      </div>
      <h3 className="mb-4 text-primary">Term Loan</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div><div className="text-small text-muted">Max financing</div><div className="font-bold">₹5,00,000</div></div>
        <div><div className="text-small text-muted">Interest</div><div className="font-bold">6% p.a.</div></div>
        <div><div className="text-small text-muted">Tenure</div><div className="font-bold">5 years</div></div>
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
    </>
  );

  return (
    <div className="container mt-8">
      <h2 className="mb-4">Your best match</h2>
      
      <Card className="mb-8 border-l-4" style={{borderLeft: '4px solid var(--success)'}}>
        {isEducation ? educationScheme : businessScheme}
      </Card>
      
      <h3 className="mb-4">Other suitable options</h3>
      
      <Card className="mb-4">
        <div className="flex justify-between mb-2">
          <h4>Micro Credit Finance Scheme</h4>
          <StatusChip status="available">Eligible</StatusChip>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 mt-2">
          <div><div className="text-small text-muted">Max financing</div><div className="font-bold">₹1,25,000</div></div>
          <div><div className="text-small text-muted">Interest</div><div className="font-bold">5% p.a.</div></div>
          <div><div className="text-small text-muted">Tenure</div><div className="font-bold">3 years</div></div>
        </div>
        <p className="text-small text-muted mb-4">Suitable for smaller projects, but loan ceiling is lower than your requirement.</p>
        <div className="flex gap-4">
          <Button variant="secondary" className="flex-1" onClick={() => navigate('/matches')}>View Scheme</Button>
          <Button variant="tertiary" className="flex-1" onClick={() => navigate('/simulator')}>Calculate EMI</Button>
        </div>
      </Card>
      
      <Card className="mb-4">
        <div className="flex justify-between mb-2">
          <h4>Mahila Samriddhi Yojana</h4>
          <StatusChip status="verify">Check Eligibility</StatusChip>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 mt-2">
          <div><div className="text-small text-muted">Max financing</div><div className="font-bold">₹1,25,000</div></div>
          <div><div className="text-small text-muted">Interest</div><div className="font-bold">4% p.a.</div></div>
          <div><div className="text-small text-muted">Target</div><div className="font-bold">Women</div></div>
        </div>
        <p className="text-small text-muted mb-4">Highly concessional scheme specifically for female entrepreneurs.</p>
        <div className="flex gap-4">
          <Button variant="secondary" className="flex-1" onClick={() => navigate('/matches')}>View Scheme</Button>
          <Button variant="tertiary" className="flex-1" onClick={() => navigate('/simulator')}>Calculate EMI</Button>
        </div>
      </Card>

      <h3 className="mb-4 mt-8">Not Recommended</h3>
      
      {!isEducation ? (
        <Card className="mb-4 opacity-75">
          <div className="flex justify-between mb-2">
            <h4>Educational Loan Scheme</h4>
            <StatusChip status="unavailable">Excluded</StatusChip>
          </div>
          <p className="text-muted mb-4">Current requirement is business financing, not education.</p>
          <Button variant="tertiary">View Rule</Button>
        </Card>
      ) : (
        <Card className="mb-4 opacity-75">
          <div className="flex justify-between mb-2">
            <h4>Term Loan (Business)</h4>
            <StatusChip status="unavailable">Excluded</StatusChip>
          </div>
          <p className="text-muted mb-4">Current requirement is education funding, not business financing.</p>
          <Button variant="tertiary">View Rule</Button>
        </Card>
      )}
    </div>
  );
}
