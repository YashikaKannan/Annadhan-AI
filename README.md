# Annadhan AI - Smart Surplus Food Redistribution Platform

## Project Overview
Annadhan AI is a role-based web platform that connects hotels, restaurants, and event organizers with NGOs, orphanages, and community kitchens. By leveraging AI (matching algorithms and freshness predictions) alongside real-time logistics, we aim to drastically reduce food waste and feed those in need.

## Problem Statement
Surplus food often gets wasted due to the lack of a structured, fast redistribution system. Manual coordination is slow, and food expires before it reaches those who need it.

## Solution
Our platform creates a real-time bridge between donors and receivers. 
- **Donors** post surplus food.
- **System** calculates freshness/urgency and finds the optimal matching receiver.
- **Receivers** accept the donation.
- **Volunteers** are assigned optimized routes to pick up and drop off the food.
- **Admins** oversee operations and view impact analytics.

## Tech Stack
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Recharts
- **Backend**: FastAPI (Python), Pydantic
- **Database**: Firebase Firestore (Mocked in-memory for local dev)
- **AI/Cloud**: Google Cloud Platform (Cloud Run, Vertex AI concepts, Google Maps logic)

## Folder Structure
```
/frontend    - Next.js frontend app
/backend     - FastAPI Python backend
/docs        - Architecture, Database, and Deployment documentation
```

## Setup Instructions

### 1. Backend Setup
1. `cd backend`
2. Create virtual environment: `python -m venv venv`
3. Activate venv: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. Install dependencies: `pip install -r requirements.txt`
5. Run server: `python main.py`
   - API will be available at `http://localhost:8000`

### 2. Frontend Setup
1. `cd frontend`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
   - App will be available at `http://localhost:3000`

## Demo Flow
1. Visit `http://localhost:3000/` to see the landing page.
2. Click **Sign Up** or **Log in** to view the authentication screens.
3. Use the role simulator dropdown on the login page to access different dashboards:
   - Donor (`/dashboard/donor`)
   - Receiver (`/dashboard/receiver`)
   - Volunteer (`/dashboard/volunteer`)
   - Admin (`/dashboard/admin`)

## Future Improvements
- Real Vertex AI integration for ML predictions.
- Live Firebase Firestore integration.
- True mapping visualization using Google Maps API.
