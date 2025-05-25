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

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup")
async def signup_user(signup_data: SignupRequest):
    # Verificar si ya existe en BD local antes de todo
    existing = await users_collection.find_one({"email": signup_data.email})
    if existing:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    token = await get_admin_token()

    created = await create_user(signup_data, token)
    if not created:
        raise HTTPException(status_code=400, detail="Error al crear usuario en Keycloak")

    # Si fue creado, guardamos en BD
    await save_user_to_db(signup_data)

    return {"message": "Usuario creado con éxito"}


async def get_admin_token() -> str:
    url = "http://localhost:8080/realms/master/protocol/openid-connect/token"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "client_id": "admin-cli",
        "grant_type": "password",
        "username": os.getenv("KEYCLOAK_ADMIN_USER"),
        "password": os.getenv("KEYCLOAK_ADMIN_PASSWORD"),
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(url, data=data, headers=headers)
        if res.status_code != 200:
            print(f"Error obteniendo token: {res.status_code} - {res.text}")
            raise HTTPException(status_code=500, detail=f"Error obteniendo token: {res.text}")
        return res.json().get("access_token")


async def create_user(data: SignupRequest, token: str) -> bool:
    url = f"{os.getenv('KEYCLOAK_URL')}/admin/realms/{os.getenv('KEYCLOAK_REALM')}/users"
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    payload = {
        "firstName": data.first_name,
        "lastName": data.last_name,
        "email": data.email,
        "username": data.email,
        "enabled": True,
        "credentials": [
            {
                "type": "password",
                "value": data.password,
                "temporary": False,
            }
        ],
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=payload, headers=headers)
        if res.status_code != 201:
            print(f"Error al crear usuario: {res.status_code} - {res.text}")
            return False
    return True


async def save_user_to_db(user: SignupRequest):
    # Ya validamos que no existe arriba, simplemente insertamos
    result = await users_collection.insert_one(user.dict())
    if not result.inserted_id:
        raise HTTPException(status_code=500, detail="No se pudo guardar el usuario")
    return True

signup_router = router
