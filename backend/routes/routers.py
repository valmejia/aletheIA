from fastapi import APIRouter
from .signup import router as signup_router

auth_router = APIRouter()

auth_router.include_router(signup_router, prefix="/signup")

all_routers = [auth_router]
