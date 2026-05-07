# API Documentation

Base URL: `http://localhost:8000/api/v1`

## Listings

### `POST /listings`
Creates a new surplus food listing.
- **Body:**
```json
{
  "donorId": "user123",
  "foodType": "Cooked Rice & Curry",
  "quantity": 50,
  "units": "servings",
  "preparedAt": "2026-05-07T12:00:00Z",
  "expiresAt": "2026-05-07T16:00:00Z",
  "pickupLocation": {"lat": 12.9716, "lng": 77.5946},
  "notes": "Contains nuts"
}
```
- **Response:** `200 OK` (Returns created listing with `listingId` and `urgencyScore`)

### `GET /listings`
Returns all active listings.

### `GET /matching/suggestions/{listingId}`
Triggers the matching engine to find the best receiver for a specific listing.
- **Response:**
```json
[
  {
    "receiverId": "r1",
    "score": 85.5,
    "distance": 2.5,
    "reason": "Matched with score 85.5 due to 2.5km distance and capacity fit."
  }
]
```

## Analytics

### `GET /analytics/summary`
Returns high-level platform impact metrics.
- **Response:**
```json
{
  "mealsSaved": 1250,
  "donationsCompleted": 45,
  "wasteReducedKg": 320,
  "activeVolunteers": 12
}
```
