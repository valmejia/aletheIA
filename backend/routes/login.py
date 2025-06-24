from fastapi import APIRouter, HTTPException, Request, Response
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import httpx
import os

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login_user(login_data: LoginRequest, request: Request):
    url = os.getenv("KEYCLOAK_TOKEN_URL")
    if not url:
        raise HTTPException(status_code=500, detail="KEYCLOAK_TOKEN_URL no está configurado en las variables de entorno.")

    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "client_id": "aletheia-user",  
        "grant_type": "password",
        "username": login_data.email,
        "password": login_data.password
    }

    async with httpx.AsyncClient() as client:
        try:
            res = await client.post(url, data=data, headers=headers)
        except httpx.RequestError as e:
            print(f"Error de conexión con Keycloak: {e}")
            raise HTTPException(status_code=503, detail="No se pudo conectar con el servidor de autenticación.")

        if res.status_code != 200:
            print(f"Keycloak error response: {res.status_code} - {res.text}")
            try:
                error_response = res.json()
                error_description = error_response.get("error_description", "").lower()
            except Exception:
                error_description = ""

            if "invalid user credentials" in error_description:
                raise HTTPException(status_code=401, detail="Usuario o contraseña incorrectos.")
            elif "account is disabled" in error_description:
                raise HTTPException(status_code=403, detail="Cuenta deshabilitada. Contacta al administrador.")
            elif "invalid client" in error_description or "unauthorized client" in error_description:
                raise HTTPException(status_code=401, detail="Cliente de autenticación inválido.")
            else:
                raise HTTPException(status_code=401, detail="No autorizado: error de autenticación.")

        token_response = res.json()
        access_token = token_response.get("access_token")


        response = JSONResponse(content={"message": "Login exitoso"})
        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=3600,
            path="/"
        )

        return response
