import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './pages/helpers.css';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import SchemeMatch from './pages/SchemeMatch';
import Simulator from './pages/Simulator';
import PartnerLocator from './pages/PartnerLocator';
import Documents from './pages/Documents';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="matches" element={<SchemeMatch />} />
          <Route path="simulator" element={<Simulator />} />
          <Route path="partners" element={<PartnerLocator />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
