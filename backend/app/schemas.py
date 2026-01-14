from pydantic import BaseModel
from datetime import date

class EmployeeOut(BaseModel):
    id: int
    name: str
    email: str
    department: str
    designation: str
    date_of_joining: date

    class Config:
        orm_mode = True
        
