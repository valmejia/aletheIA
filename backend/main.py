from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.routers import all_routers
from dotenv import load_dotenv
from starlette.middleware.sessions import SessionMiddleware
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("SESSION_SECRET_KEY")
)


@app.get("/")
async def root():
    return {"message": "AletheIA backend running!"}

for router in all_routers:
    app.include_router(router)
