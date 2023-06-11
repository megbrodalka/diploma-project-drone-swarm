from pydantic import BaseModel


class Drone(BaseModel):
    id: int = 0
    name: str
    ip: str
    status: str = "Landed"
    battery: str = "100%"
