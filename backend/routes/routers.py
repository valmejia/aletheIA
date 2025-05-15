from .signup import router as signup_router
from .login import router as login_router

all_routers = [signup_router, login_router]
