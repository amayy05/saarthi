import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="container mt-8 flex justify-center items-center" style={{ minHeight: '60vh' }}>
      <Card className="w-full" style={{ maxWidth: '400px' }}>
        <h2 className="mb-2 text-center text-primary">Login to SAARTHI-SC</h2>
        <p className="text-center text-muted mb-6">Access your application journey</p>
        
        <form onSubmit={handleLogin}>
          <Input label="Mobile Number / Email" type="text" placeholder="Enter your registered mobile or email" required />
          <Input label="Password" type="password" placeholder="Enter your password" required />
          
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-small text-muted cursor-pointer">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="text-small text-primary">Forgot Password?</a>
          </div>
          
          <Button variant="primary" className="w-full mb-4" type="submit">
            Login
          </Button>
          
          <p className="text-center text-small text-muted">
            Don't have an account? <Link to="/signup" className="text-primary font-bold">Sign Up</Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
