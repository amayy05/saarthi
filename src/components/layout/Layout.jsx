import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, List, Calculator, MapPin, FileText, User } from 'lucide-react';
import './layout.css';

export default function Layout() {
  const location = useLocation();
  const isPublicRoute = ['/', '/login', '/signup', '/onboarding'].includes(location.pathname);

  return (
    <div className="app-container">
      {/* Official Micro Header */}
      <div className="official-micro-header">
        <div className="container">
          <span className="official-slogan">A Government of India Initiative | Empowering SC Entrepreneurs & Students</span>
        </div>
      </div>

      {/* Top Header */}
      <header className="app-header">
        <div className="container header-content">
          <Link to="/" className="brand-logo">
            <span className="brand-primary">SAARTHI</span>
            <span className="brand-secondary">-SC</span>
          </Link>
          
          <div className="header-actions">
            {!isPublicRoute && (
              <nav className="desktop-nav">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/matches" className={location.pathname === '/matches' ? 'active' : ''}>Matches</Link>
                <Link to="/simulator" className={location.pathname === '/simulator' ? 'active' : ''}>Calculator</Link>
                <Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partners</Link>
                <Link to="/documents" className={location.pathname === '/documents' ? 'active' : ''}>Docs</Link>
              </nav>
            )}
            <div className="lang-selector">
              <span className="active">EN</span> | <span>हिंदी</span> | <span>मराठी</span>
            </div>
            
            {isPublicRoute ? (
              <div className="auth-buttons">
                <Link to="/login" className="btn-text">Login</Link>
                <Link to="/signup" className="btn-outline-small">Sign Up</Link>
              </div>
            ) : (
              <div className="user-profile">
                <User size={20} />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="app-main">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation (Visible only on mobile for Citizen flow) */}
      {!isPublicRoute && (
        <nav className="mobile-bottom-nav">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link to="/matches" className={`nav-item ${location.pathname === '/matches' ? 'active' : ''}`}>
            <List size={24} />
            <span>Matches</span>
          </Link>
          <Link to="/partners" className={`nav-item ${location.pathname === '/partners' ? 'active' : ''}`}>
            <MapPin size={24} />
            <span>Partners</span>
          </Link>
          <Link to="/documents" className={`nav-item ${location.pathname === '/documents' ? 'active' : ''}`}>
            <FileText size={24} />
            <span>Docs</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
