import math
from typing import List
from app.models.schemas import FoodListing, MatchScore, Location

def calculate_distance(loc1: Location, loc2: Location) -> float:
    # Haversine formula for distance in km
    R = 6371.0
    lat1, lon1 = math.radians(loc1.lat), math.radians(loc1.lng)
    lat2, lon2 = math.radians(loc2.lat), math.radians(loc2.lng)
    
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    distance = R * c
    return distance

def get_best_matches(listing: FoodListing, receivers: List[dict]) -> List[MatchScore]:
    """
    Calculate match scores for available receivers.
    matchScore = 
      0.30 * proximityScore +
      0.25 * urgencyScore +
      0.20 * foodCompatibilityScore +
      0.15 * capacityScore +
      0.10 * freshnessScore
    """
    matches = []
    donor_loc = Location(lat=listing.pickupLocation['lat'], lng=listing.pickupLocation['lng'])
    
    for receiver in receivers:
        receiver_loc = Location(lat=receiver.get('location', {}).get('lat', 0), 
                              lng=receiver.get('location', {}).get('lng', 0))
        
        distance = calculate_distance(donor_loc, receiver_loc)
        
        # Proximity score: max 100 if distance is 0, decreases by 2 per km.
        proximity_score = max(0, 100 - (distance * 2))
        
        # Urgency score (mocked based on receiver profile)
        urgency_score = receiver.get('urgencyLevel', 50)
        
        # Capacity score
        capacity = receiver.get('capacity', 0)
        capacity_score = 100 if capacity >= listing.quantity else (capacity / listing.quantity) * 100
        
        # Final Score
        score = (0.30 * proximity_score) + (0.25 * urgency_score) + (0.15 * capacity_score)
        # Adding some base scores for mock compatibility and freshness
        score += (0.20 * 80) + (0.10 * listing.urgencyScore)
        
        matches.append(MatchScore(
            receiverId=receiver.get('receiverId', 'unknown'),
            score=round(score, 2),
            distance=round(distance, 2),
            reason=f"Matched with score {round(score, 2)} due to {round(distance, 2)}km distance and capacity fit."
        ))
        
    matches.sort(key=lambda x: x.score, reverse=True)
    return matches
