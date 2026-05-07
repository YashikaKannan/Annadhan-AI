from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import datetime, timezone
import uuid
from app.models.schemas import FoodListingCreate, FoodListing, MatchScore
from app.services.matching import get_best_matches

router = APIRouter()

# In-memory mock DB for simplicity since we don't have Firebase credentials right now
db_listings = []
db_receivers = [
    {"receiverId": "r1", "organizationName": "Hope Orphanage", "capacity": 50, "location": {"lat": 12.9716, "lng": 77.5946}, "urgencyLevel": 80},
    {"receiverId": "r2", "organizationName": "Community Kitchen", "capacity": 200, "location": {"lat": 12.9352, "lng": 77.6245}, "urgencyLevel": 60}
]

@router.post("/listings", response_model=FoodListing)
async def create_listing(listing_in: FoodListingCreate):
    now = datetime.now(timezone.utc)
    # Calculate simple urgency score based on expiry
    time_to_expiry = (listing_in.expiresAt - now).total_seconds() / 3600 # hours
    urgency_score = max(0, 100 - (time_to_expiry * 5)) # Higher if expiring sooner

    listing = FoodListing(
        **listing_in.dict(),
        listingId=str(uuid.uuid4()),
        status="pending",
        urgencyScore=urgency_score,
        createdAt=now
    )
    db_listings.append(listing)
    return listing

@router.get("/listings", response_model=List[FoodListing])
async def get_listings():
    return db_listings

@router.get("/matching/suggestions/{listingId}", response_model=List[MatchScore])
async def get_matching_suggestions(listingId: str):
    listing = next((l for l in db_listings if l.listingId == listingId), None)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    
    matches = get_best_matches(listing, db_receivers)
    return matches

@router.get("/analytics/summary")
async def get_analytics_summary():
    # Mock data for analytics
    return {
        "mealsSaved": 1250,
        "donationsCompleted": 45,
        "wasteReducedKg": 320,
        "activeVolunteers": 12
    }
