from fastapi import APIRouter, HTTPException
from starlette.requests import Request

router = APIRouter(prefix="/auth", tags=["auth"])

@router.get("/check-session")
async def check_session(request: Request):
    if request.session.get("user"):
        return {"authenticated": True}
    raise HTTPException(status_code=401, detail="No autenticado")
