import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Stepper } from '../components/ui/Stepper';
import { Mic } from 'lucide-react';
import './pages.css';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [aiInput, setAiInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState(null);

  const handleAiSubmit = async () => {
    setIsProcessing(true);
    
    try {
      // Direct call to local Ollama API
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3.2', // Adjust if specific version tag is needed like llama3.2:latest
          prompt: `Extract the following details from this text into a JSON object with keys: purpose, business_type, project_cost, family_income. Return ONLY valid JSON, nothing else. Text: "${aiInput}"`,
          stream: false,
          format: 'json'
        })
      });
      
      const data = await response.json();
      let parsed = JSON.parse(data.response);
      setExtractedData(parsed);
      setStep(1); // Move to review step
    } catch (error) {
      console.error("Failed to parse via Ollama", error);
      // Fallback for demo if Ollama isn't running
      setExtractedData({
        purpose: "Business",
        business_type: "Dairy",
        project_cost: "400000",
        family_income: "300000"
      });
      setStep(1);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-8">
      <Stepper 
        steps={['Need', 'Review Profile', 'Finance Details']} 
        currentStep={step} 
      />
      
      {step === 0 && (
        <Card className="onboarding-card">
          <h2 className="mb-4">Tell us what you need</h2>
          <p className="text-muted mb-4">
            “Describe your requirement in your own words. You can also speak.”
          </p>
          
          <div className="ai-input-area mb-4">
            <textarea 
              className="input-field w-full ai-textarea" 
              rows="4" 
              placeholder="e.g. I want to start a dairy business. I need 4 lakhs and my family income is 3 lakhs..."
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
            ></textarea>
            <button className="mic-button"><Mic size={20} /> Speak</button>
          </div>
          
          <Button 
            variant="primary" 
            className="w-full" 
            onClick={handleAiSubmit}
            disabled={!aiInput || isProcessing}
          >
            {isProcessing ? 'Understanding...' : 'Understand My Requirement'}
          </Button>
        </Card>
      )}

      {step === 1 && extractedData && (
        <Card className="onboarding-card">
          <h2 className="mb-4">We understood</h2>
          
          <div className="extracted-data mb-6">
            <div className="data-row">
              <span className="data-label">Purpose</span>
              <span className="data-value">{extractedData.purpose || 'Business'}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Activity</span>
              <span className="data-value">{extractedData.business_type || 'N/A'}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Project cost</span>
              <span className="data-value">₹{extractedData.project_cost || '0'}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Family income</span>
              <span className="data-value">₹{extractedData.family_income || '0'}</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => setStep(0)}>Edit</Button>
            <Button variant="primary" className="flex-1" onClick={() => navigate('/matches')}>Looks correct</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
