from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import all_routers
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3002",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "AletheIA backend running!"}

for router in all_routers:
    app.include_router(router)
