import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { StatusChip } from '../components/ui/StatusChip';
import { Button } from '../components/ui/Button';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function Documents() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Identity proof', status: 'missing' },
    { id: 2, name: 'Caste certificate', status: 'missing' },
    { id: 3, name: 'Income proof', status: 'missing' },
    { id: 4, name: 'Address proof', status: 'missing' },
    { id: 5, name: 'Project/business document', status: 'missing' }
  ]);
  
  const [uploadingId, setUploadingId] = useState(null);

  const simulateUpload = (id) => {
    setUploadingId(id);
    setTimeout(() => {
      setDocuments(docs => docs.map(d => d.id === id ? {...d, status: 'completed'} : d));
      setUploadingId(null);
    }, 1500);
  };

  const completedCount = documents.filter(d => d.status === 'completed').length;
  const progressPercent = (completedCount / documents.length) * 100;

  return (
    <div className="container mt-8 max-w-lg mx-auto" style={{maxWidth: '800px'}}>
      <h2 className="mb-2">Your application readiness</h2>
      
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{Math.round(progressPercent)}% ready</span>
        {completedCount < documents.length && (
          <StatusChip status="verify" icon={<AlertCircle size={14}/>}>
            {documents.length - completedCount} document{documents.length - completedCount > 1 ? 's' : ''} remaining
          </StatusChip>
        )}
      </div>
      
      <div className="w-full bg-gray h-2 rounded-full overflow-hidden mb-8" style={{backgroundColor: 'var(--border-color)'}}>
        <div 
          className="h-full transition-all" 
          style={{ width: `${progressPercent}%`, backgroundColor: 'var(--success)' }}
        ></div>
      </div>
      
      <div className="flex flex-col gap-4">
        {documents.map(doc => (
          <Card key={doc.id} className="flex justify-between items-center p-4">
            <div className="flex items-center gap-3">
              {doc.status === 'completed' ? (
                <CheckCircle className="text-success" />
              ) : (
                <FileText className="text-muted" />
              )}
              <div>
                <div className="font-bold">{doc.name}</div>
                {doc.status === 'completed' && <div className="text-small text-success">Uploaded successfully</div>}
              </div>
            </div>
            
            <div>
              {doc.status === 'completed' ? (
                <div className="flex gap-2">
                  <Button variant="tertiary">View</Button>
                  <Button variant="secondary" onClick={() => simulateUpload(doc.id)}>Replace</Button>
                </div>
              ) : (
                <Button 
                  variant="primary" 
                  onClick={() => simulateUpload(doc.id)}
                  disabled={uploadingId === doc.id}
                >
                  {uploadingId === doc.id ? 'Uploading...' : <><Upload size={16}/> Upload</>}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t flex justify-end">
        <Button variant="primary" disabled={progressPercent < 100} className="px-8">
          Proceed to Application
        </Button>
      </div>
    </div>
  );
}
