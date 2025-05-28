from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import httpx
import os

router = APIRouter()

KEYCLOAK_INTROSPECT_URL = os.getenv("KEYCLOAK_INTROSPECT_URL")
CLIENT_ID = "aletheia-user"
CLIENT_SECRET = os.getenv("KEYCLOAK_CLIENT_SECRET")

@router.get("/home")
async def home(request: Request):
    access_token = request.cookies.get("access_token")
    if not access_token:
        raise HTTPException(status_code=401, detail="No autenticado")

    if not KEYCLOAK_INTROSPECT_URL:
        raise HTTPException(status_code=500, detail="KEYCLOAK_INTROSPECT_URL no configurado")

    data = {
        "token": access_token,
        "client_id": CLIENT_ID,

    }

    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    async with httpx.AsyncClient() as client:
        res = await client.post(KEYCLOAK_INTROSPECT_URL, data=data, headers=headers)
        if res.status_code != 200:
            raise HTTPException(status_code=401, detail="Token inválido o expirado")

        token_info = res.json()
        active = token_info.get("active", False)
        if not active:
            raise HTTPException(status_code=401, detail="Token inválido o expirado")


    return JSONResponse({"message": "Bienvenido a Home", "user": token_info.get("username", "")})
