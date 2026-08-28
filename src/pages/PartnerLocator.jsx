import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card } from '../components/ui/Card';
import { StatusChip } from '../components/ui/StatusChip';
import { Button } from '../components/ui/Button';

// Fix leaflet default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock Data
const userLocation = [19.0760, 72.8777]; // Mumbai for demo

const partners = [
  {
    id: 1,
    name: 'ABC Channelizing Agency',
    lat: 19.0800,
    lng: 72.8800,
    distance: '3.4 km',
    schemes: ['Term Loan', 'Micro Finance'],
    status: 'Available',
    recommended: true
  },
  {
    id: 2,
    name: 'State Bank Branch',
    lat: 19.0700,
    lng: 72.8700,
    distance: '1.8 km',
    schemes: ['Term Loan'],
    status: 'Verify',
    recommended: false
  }
];

export default function PartnerLocator() {
  const [selectedPartner, setSelectedPartner] = useState(partners[0]);

  return (
    <div className="container mt-8 h-full flex flex-col">
      <h2 className="mb-4">Find an eligible channel partner</h2>
      <p className="text-muted mb-4">Showing partners supporting Term Loan near you.</p>
      
      <div className="grid md-grid-map gap-6" style={{height: '600px'}}>
        <div className="partner-list flex flex-col gap-4 overflow-y-auto">
          {partners.map(p => (
            <Card 
              key={p.id} 
              className={`cursor-pointer ${selectedPartner.id === p.id ? 'border-primary shadow-md' : ''}`}
              onClick={() => setSelectedPartner(p)}
            >
              {p.recommended && <StatusChip status="recommended" icon="⭐" className="mb-2">Recommended</StatusChip>}
              <h3 className="mb-1">{p.name}</h3>
              <p className="text-small text-muted mb-2">{p.distance} away</p>
              
              <div className="flex gap-2 mb-2">
                <StatusChip status={p.status === 'Available' ? 'available' : 'verify'}>
                  {p.status}
                </StatusChip>
              </div>
              
              <div className="text-small text-muted mt-2">Schemes: {p.schemes.join(', ')}</div>
            </Card>
          ))}
        </div>
        
        <div className="map-container rounded-lg overflow-hidden border border-border">
          <MapContainer center={userLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* User Location */}
            <Marker position={userLocation}>
              <Popup>You are here</Popup>
            </Marker>
            
            {/* Partner Locations */}
            {partners.map(p => (
              <Marker key={p.id} position={[p.lat, p.lng]}>
                <Popup>
                  <strong>{p.name}</strong><br/>
                  {p.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      
      {selectedPartner && (
        <Card className="mt-6 bg-gray">
          <div className="flex justify-between items-center">
            <div>
              <h3>Selected: {selectedPartner.name}</h3>
              <p className="text-muted">Last verified: 2 hours ago | Prototype partner data</p>
            </div>
            <Button variant="primary">Get Directions</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
