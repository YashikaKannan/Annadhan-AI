# System Architecture

The Annadhan AI platform follows a modern, scalable, serverless microservices-oriented architecture utilizing Google Cloud and Firebase.

## Layers

### 1. Presentation Layer (Frontend)
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** App Router for role-based access (`/dashboard/donor`, `/dashboard/receiver`, etc.)
- **Responsibility:** User interface, form validation (React Hook Form + Zod), displaying real-time updates.

### 2. API & Business Logic Layer (Backend)
- **Framework:** FastAPI (Python)
- **Responsibility:** Central API gateway for the frontend. Handles complex business logic:
  - Validating donation requests.
  - Computing freshness and urgency.
  - Matching engine logic.
  - Dispatching async jobs (Cloud Tasks).

### 3. Data & Real-time Layer
- **Primary Database:** Firebase Firestore.
- **Why Firestore?** Provides real-time listeners for the frontend. When a volunteer marks a pickup as "en route", the receiver's dashboard updates instantly without polling.

### 4. Intelligence Layer (AI/ML)
- **Service:** Google Vertex AI (Mocked initially).
- **Functions:**
  - Freshness Prediction: Uses food type, preparation time, and ambient temperature to predict expiry risk.
  - Smart Matching: Ranks receivers based on proximity (Google Maps Distance Matrix), urgency, and capacity.

### 5. Infrastructure & Operations
- **Hosting:** Cloud Run for backend API. Vercel or Firebase Hosting for Frontend.
- **Storage:** Cloud Storage for food images.
- **Analytics:** BigQuery (Data pipelines move completed transaction logs from Firestore to BigQuery for heavy analytics).

## Data Flow Diagram (Conceptual)
1. Donor -> Posts Food -> [FastAPI Backend]
2. [FastAPI Backend] -> Triggers Match Scoring -> Finds best Receivers
3. [FastAPI Backend] -> Saves to [Firestore] -> Sends Notification to Receiver
4. Receiver -> Accepts -> [FastAPI Backend] -> Assigns Volunteer -> Route generated via [Google Maps API]
5. Delivery Completes -> Status Updated in [Firestore] -> Analytics sent to [BigQuery]
