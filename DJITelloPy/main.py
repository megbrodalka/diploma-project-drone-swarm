import uvicorn
from fastapi import FastAPI
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from djitellopy import TelloSwarm

app = FastAPI()
swarm = None

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"]
)

class Drone(BaseModel):
    id: int = 0
    name: str
    ip: str
    status: str = "Landed"
    battery: str = "100%"


drones = [
    Drone(id=1, name="Drone 1", ip="192.168.1.1", status="Landed", battery="100%"),
    Drone(id=2, name="Drone 2", ip="192.168.1.2", status="Flying", battery="50%"),
    Drone(id=3, name="Drone 3", ip="192.168.1.3", status="Flying", battery="40%"),
    Drone(id=4, name="Drone 4", ip="192.168.1.4", status="Landed", battery="90%")
]

drone_id_counter = len(drones)

@app.post("/api/drones", response_model=Drone)
def create_drone(drone: Drone):
    global drone_id_counter
    drone_id_counter += 1
    drone.id = drone_id_counter
    drones.append(drone)
    return drone

@app.get("/api/drones", response_model=List[Drone])
def get_all_drones():
    return drones

@app.get("/api/drones/{drone_id}", response_model=Drone)
def get_drone(drone_id: int):
    for drone in drones:
        if drone.id == drone_id:
            return drone
    raise HTTPException(status_code=404, detail="Drone not found")


# Patch for updating battery, status

@app.delete("/api/drones/{drone_id}")
def delete_drone(drone_id: int):
    for i, drone in enumerate(drones):
        if drone.id == drone_id:
            del drones[i]
            return {"message": "Drone deleted"}
    raise HTTPException(status_code=404, detail="Drone not found")


@app.post("/api/connect")
def connect_drones(data: dict):
    global swarm
    ips = data.get('ips')
    swarm = TelloSwarm.fromIps(ips)
    swarm.connect()
    return {"message": "Success"}

app.post("/api/notifications")
def send_notification(data):
    pass


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
