from .signup import router as signup_router
from .login import router as login_router
from .checkSession import router as session_router
from .home import router as home_router

all_routers = [signup_router, login_router, session_router, home_router]
