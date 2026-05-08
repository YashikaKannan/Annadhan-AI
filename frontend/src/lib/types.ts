export interface PickupLocation {
  address?: string;
  lat?: number;
  lng?: number;
}

export interface Listing {
  id?: string;

  // Existing fields
  title?: string;
  description?: string;

  // Backend-compatible fields
  donorId?: string;
  foodType?: string;

  quantity?: number;
  units?: string;

  status?: string;
  matchedTo?: string | null;

  preparedAt?: string;
  expiresAt?: string;

  createdAt?: string;
  updatedAt?: string;

  pickupLocation?: PickupLocation;

  imageUrl?: string;
  notes?: string;

  receiverId?: string;
  volunteerId?: string;

  pickupTime?: string;
  deliveryTime?: string;

  freshnessScore?: number;
  routeDistance?: number;
}

export interface AnalyticsSummary {
  totalFoodSaved?: number;
  activeDonors?: number;
  deliveriesCompleted?: number;
  wasteReduced?: number;

  mealsSaved?: number;
  activeDonations?: number;
  wasteReducedKg?: number;
  activeReceivers?: number;
  averageDeliveryTime?: number;
  totalListings?: number;
}

export interface MatchingSuggestion {
  id?: string;
  listingId?: string;

  receiverId?: string;
  receiverName?: string;

  distanceKm?: number;

  freshnessScore?: string | number;

  urgencyScore?: number;
  capacityScore?: number;
  foodFitScore?: number;

  status?: string;
  createdAt?: string;
}

export interface Task {
  id?: string | number;

  pickup?: string;
  dropoff?: string;

  pickupLocation?: PickupLocation;
  dropLocation?: PickupLocation;

  donorName?: string;
  receiverName?: string;

  distance?: string;
  distanceKm?: number;

  eta?: string;
  servings?: string;

  urgency?: string;
  status?: string;

  assignedTo?: string;

  createdAt?: string;
  updatedAt?: string;
}