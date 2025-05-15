from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
import os
from dotenv import load_dotenv
from db import users_collection

load_dotenv()

class SignupRequest(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    username: str

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup")
async def signup_user(signup_data: SignupRequest):
    token = await get_admin_token()

    if await create_user(signup_data, token):
        await save_user_to_db(signup_data)
        return {"message": "Usuario creado con éxito"}

    raise HTTPException(status_code=400, detail="Error al crear usuario")

async def get_admin_token():
    url = os.getenv("KEYCLOAK_TOKEN_URL")
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "client_id": "aletheia-user",
        "client_secret": os.getenv("KEYCLOAK_CLIENT_SECRET"),
        "grant_type": "password",
        "username": "valmejiag",
            "password": "admin12345"
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(url, data=data, headers=headers)
        if res.status_code != 200:
            print(f"Error obteniendo token: {res.status_code} - {res.text}")
            raise HTTPException(status_code=500, detail=f"Error obteniendo token: {res.text}")
        return res.json().get("access_token")


async def create_user(data: SignupRequest, token: str):
    url = f"{os.getenv('KEYCLOAK_URL')}/admin/realms/{os.getenv('KEYCLOAK_REALM')}/users"
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    payload = {
        "firstName": data.first_name,
        "lastName": data.last_name,
        "email": data.email,
        "username": data.email,
        "enabled": True,
        "credentials": [{"type": "password", "value": data.password, "temporary": False}]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=payload, headers=headers)
        if res.status_code != 201:
            print(f"Error al crear usuario: {res.status_code} - {res.text}")
    return res.status_code == 201


async def save_user_to_db(user: SignupRequest):
    existing = await users_collection.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    result = await users_collection.insert_one(user.dict())
    if result.inserted_id:
        return True
    raise HTTPException(status_code=500, detail="No se pudo guardar el usuario")

signup_router = router




