from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
import os

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/login")
async def login_user(login_data: LoginRequest):
    url = os.getenv("KEYCLOAK_TOKEN_URL")
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "client_id": "aletheia-user",
        "grant_type": "password",
        "username": login_data.email,
        "password": login_data.password
    }

    async with httpx.AsyncClient() as client:
        res = await client.post(url, data=data, headers=headers)

        if res.status_code != 200:
            print(f"Error en login: {res.status_code} - {res.text}")
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        return res.json()
