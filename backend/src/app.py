from fastapi import FastAPI,Request,Response
from fastapi.middleware.cors import CORSMiddleware
from clerk_backend_api import clerk
import os


clerk_sdk=Clerk(bearer_auth=os.getenv("CLERK_BEARER_AUTH"))

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
