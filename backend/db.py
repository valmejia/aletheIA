from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

mongo_url = os.getenv("MONGODB_URL", "mongodb://localhost:27017")

client = MongoClient(mongo_url)

db = client.get_database("aletheia_db")

users_collection = db.users
