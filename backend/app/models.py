from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100))
    department = Column(String(100))
    designation = Column(String(100))
    date_of_joining = Column(Date)
