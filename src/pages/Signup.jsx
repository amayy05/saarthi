import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="container mt-8 flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <Card className="w-full" style={{ maxWidth: '450px' }}>
        <h2 className="mb-2 text-center text-primary">Create an Account</h2>
        <p className="text-center text-muted mb-6">Join SAARTHI-SC to discover financing options</p>
        
        <form onSubmit={handleSignup}>
          <Input label="Full Name" type="text" placeholder="As per Aadhaar/PAN" required />
          <Input label="Mobile Number" type="tel" placeholder="10-digit mobile number" required />
          <Input label="Email (Optional)" type="email" placeholder="For application updates" />
          <Input label="Create Password" type="password" placeholder="Minimum 8 characters" required />
          
          <div className="mb-6">
            <label className="flex items-start gap-2 text-small text-muted cursor-pointer">
              <input type="checkbox" className="mt-1" required /> 
              <span>I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a> of the SAARTHI-SC platform.</span>
            </label>
          </div>
          
          <Button variant="primary" className="w-full mb-4" type="submit">
            Create Account
          </Button>
          
          <p className="text-center text-small text-muted">
            Already have an account? <Link to="/login" className="text-primary font-bold">Login</Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
