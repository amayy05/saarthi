# SAARTHI-SC (Smart Assistance & Routing for SC Credit)

**Problem Statement ID:** 26092 (Smart India Hackathon 2026)  
**Problem Statement:** AI-Driven Scheme Matching for Marginalized Entrepreneurs  

## Overview
SAARTHI-SC is a multilingual digital platform designed to help citizens discover suitable government-backed financial schemes, understand eligibility, estimate repayment, locate an appropriate nearby channel partner, and prepare their application documents.

The platform is positioned as an **intelligent discovery, explanation, and routing layer** around the existing government financing ecosystem. 

**Core Principle:** *AI understands the citizen. Government rules determine eligibility. The system explains the result. The citizen chooses the next step.*

## Key Features
1. **AI Profile Assistant:** Uses local LLM (Ollama / Llama 3.2b) to extract applicant details from natural language input.
2. **Explainable Scheme Matching:** Matches applicants to schemes with a transparent "Why this matches you" explanation.
3. **Financial Simulator:** Interactive EMI and repayment calculator with visual principal/interest breakdown.
4. **Geo-Spatial Partner Locator:** Interactive map (Leaflet) to find nearby available channelizing agencies.
5. **Document Readiness:** Step-by-step checklist to ensure applicants have required documentation before applying.

## Tech Stack
- **Frontend Framework:** React + Vite
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Vanilla CSS with custom modern civic-fintech design tokens
- **Map Integration:** React Leaflet (`react-leaflet`)
- **AI Integration:** Local Ollama API (Llama 3.2b)

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. To test the AI Onboarding functionality, ensure your local Ollama instance is running with the Llama 3.2b model. If it is not running, the app will gracefully fall back to mocked data for demonstration purposes.
