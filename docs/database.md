# Database Schema (Firestore Conceptual)

Firestore uses a NoSQL document-based structure. Here is the schema representation:

## Collection: `users`
- `uid` (string, document ID)
- `name` (string)
- `email` (string)
- `role` (string) ['donor', 'receiver', 'volunteer', 'admin']
- `phone` (string)
- `organizationName` (string)
- `isVerified` (boolean)
- `createdAt` (timestamp)

## Collection: `listings`
- `listingId` (string, document ID)
- `donorId` (string) -> ref to `users`
- `foodType` (string)
- `quantity` (number)
- `preparedAt` (timestamp)
- `expiresAt` (timestamp)
- `pickupLocation` (map) `{lat, lng}`
- `status` (string) ['pending', 'matched', 'assigned', 'picked_up', 'delivered', 'cancelled']
- `urgencyScore` (number)
- `matchedReceiverId` (string, optional)
- `assignedVolunteerId` (string, optional)
- `createdAt` (timestamp)

## Collection: `deliveries`
- `deliveryId` (string, document ID)
- `listingId` (string)
- `donorId` (string)
- `receiverId` (string)
- `volunteerId` (string)
- `status` (string) ['assigned', 'en_route_pickup', 'picked_up', 'en_route_delivery', 'delivered']
- `routeDistanceKm` (number)
- `estimatedTimeMins` (number)
- `actualPickupTime` (timestamp)
- `actualDeliveryTime` (timestamp)

## Collection: `analytics` (Exported to BigQuery)
- `id` (string)
- `listingId` (string)
- `mealsSaved` (number)
- `wasteReducedKg` (number)
- `date` (timestamp)
