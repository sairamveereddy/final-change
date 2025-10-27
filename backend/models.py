from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class PlanFeature(BaseModel):
    text: str

class Plan(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    category: str
    type: str  # 'lic' or 'hdfc'
    short_description: str
    features: List[str]
    full_details: str
    who_its_for: str
    key_benefits: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    plan_interest: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
