# Deployment Guide

The platform is designed to be deployed entirely on Google Cloud for scalability and compliance.

## 1. Backend Deployment (Google Cloud Run)
We use Cloud Run to deploy the FastAPI backend as a serverless container.

1. **Build Docker Image:**
   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/annadhan-api
   ```
2. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy annadhan-api \
     --image gcr.io/YOUR_PROJECT_ID/annadhan-api \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --set-env-vars="GOOGLE_MAPS_API_KEY=your_key"
   ```

## 2. Frontend Deployment (Firebase Hosting or Vercel)

### Option A: Vercel (Easiest for Next.js)
1. Link your GitHub repository to Vercel.
2. Vercel will automatically detect the Next.js App Router and build the app using `npm run build`.

### Option B: Firebase Hosting
1. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
2. Configure to use the `out` directory or Next.js Web Framework support.
3. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

## 3. Database & Auth Setup (Firebase)
1. Go to Firebase Console -> Authentication -> Enable Email/Password.
2. Go to Firestore Database -> Create Database (Start in production mode).
3. Set up Firestore Security Rules (`firestore.rules`) to ensure only authorized users can read/write data based on their `role` claim.

## 4. Environment Variables
Ensure the following are set in your production environment:
- `FIREBASE_CREDENTIALS_PATH` (or use default GCP service account)
- `GOOGLE_MAPS_API_KEY`
- `VERTEX_AI_PROJECT`
