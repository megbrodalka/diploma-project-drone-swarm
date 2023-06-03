from pydantic import BaseModel

class Drone(BaseModel):
    id: int
    name: str
    ip: str
    status: str
    battery: str
