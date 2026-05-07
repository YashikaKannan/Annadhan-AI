from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime

class UserBase(BaseModel):
    uid: str
    email: str
    name: str
    role: str # donor, receiver, volunteer, admin
    phone: Optional[str] = None
    organizationName: Optional[str] = None
    isVerified: bool = False
    location: Optional[Dict[str, float]] = None # {lat, lng}

class FoodListingBase(BaseModel):
    donorId: str
    foodType: str
    quantity: float
    units: str
    preparedAt: datetime
    expiresAt: datetime
    pickupLocation: Dict[str, float]
    imageUrl: Optional[str] = None
    notes: Optional[str] = None

class FoodListingCreate(FoodListingBase):
    pass

class FoodListing(FoodListingBase):
    listingId: str
    status: str = "pending" # pending, matched, assigned, picked_up, delivered, cancelled
    urgencyScore: float = 0.0
    matchedReceiverId: Optional[str] = None
    assignedVolunteerId: Optional[str] = None
    createdAt: datetime

class MatchScore(BaseModel):
    receiverId: str
    score: float
    distance: float
    reason: str

class Location(BaseModel):
    lat: float
    lng: float
