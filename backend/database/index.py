from motor.motor_asyncio import AsyncIOMotorClient
    from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "../../.env")

MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongo:27017")
MONGO_DB = os.getenv("MONGO_DB", "AletheIA")

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]
