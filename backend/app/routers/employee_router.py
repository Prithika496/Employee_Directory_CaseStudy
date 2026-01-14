from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.employee_service import search_employees
from app.schemas import EmployeeOut

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/employees", response_model=list[EmployeeOut])
def get_employees(search: str = ""):
    search = search.strip()

    if len(search) < 2:
        return []  

    with SessionLocal() as db:
        return search_employees(db, search)
