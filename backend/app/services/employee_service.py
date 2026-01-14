from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models import Employee

def search_employees(db: Session, search: str):
    search_clean = search.strip()

    # First try to match department exactly (case-insensitive)
    department_results = db.query(Employee).filter(
        func.binary(func.trim(Employee.department)) == search_clean
    ).limit(20).all()

    if department_results:
        return department_results

    # If no department match, search name partially (case-insensitive)
    name_results = db.query(Employee).filter(
        func.lower(func.trim(Employee.name)).like(f"%{search_clean.lower()}%")
    ).limit(20).all()

    return name_results


