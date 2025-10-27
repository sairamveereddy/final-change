from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import Plan, ContactForm
from plans_data import ALL_PLANS


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Routes
@api_router.get("/")
async def root():
    return {"message": "VSR Insurance Plus API"}

@api_router.get("/plans", response_model=List[Plan])
async def get_plans(
    category: Optional[str] = Query(None),
    type: Optional[str] = Query(None)
):
    """Get all plans or filter by category and type"""
    plans = []
    
    for plan_data in ALL_PLANS:
        plan = Plan(**plan_data)
        
        # Apply filters
        if category and plan.category != category:
            continue
        if type and plan.type != type:
            continue
            
        plans.append(plan)
    
    return plans

@api_router.get("/plans/{plan_id}", response_model=Plan)
async def get_plan(plan_id: str):
    """Get a specific plan by ID"""
    for plan_data in ALL_PLANS:
        plan = Plan(**plan_data)
        if plan.id == plan_id:
            return plan
    
    raise HTTPException(status_code=404, detail="Plan not found")

@api_router.post("/contact", response_model=ContactForm)
async def submit_contact_form(contact: ContactForm):
    """Submit a contact form"""
    try:
        await db.contact_forms.insert_one(contact.model_dump())
        return contact
    except Exception as e:
        logging.error(f"Error saving contact form: {e}")
        raise HTTPException(status_code=500, detail="Error submitting contact form")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()