import uvicorn
from fastapi import FastAPI
from models import Drone
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"]
)

drones = [
    {"id": 1, "name": "Drone 1", "ip": "192.168.1.1", "status": "Online", "battery": "100%"},
    {"id": 2, "name": "Drone 2", "ip": "192.168.1.2", "status": "Offline", "battery": "50%"},
    {"id": 3, "name": "Drone 3", "ip": "192.168.1.3", "status": "Offline", "battery": "40%"},
    {"id": 4, "name": "Drone 4", "ip": "192.168.1.4", "status": "Online", "battery": "90%"}
]

@app.post("/drones", response_model=Drone)
def create_drone(drone: Drone):
    drone_dict = drone.dict()
    drone_dict["id"] = len(drones) + 1
    drones.append(drone_dict)
    return drone

@app.get("/drones", response_model=List[Drone])
def get_all_drones():
    return drones

@app.get("/drones/{drone_id}", response_model=Drone)
def get_drone(drone_id: int):
    for drone in drones:
        if drone["id"] == drone_id:
            return drone
    raise HTTPException(status_code=404, detail="Drone not found")

@app.put("/drones/{drone_id}", response_model=Drone)
def update_drone(drone_id: int, drone: Drone):
    for i, existing_drone in enumerate(drones):
        if existing_drone["id"] == drone_id:
            drone_dict = drone.dict()
            drone_dict["id"] = drone_id
            drones[i] = drone_dict
            return drone
    raise HTTPException(status_code=404, detail="Drone not found")


@app.delete("/drones/{drone_id}")
def delete_drone(drone_id: int):
    for i, drone in enumerate(drones):
        if drone["id"] == drone_id:
            del drones[i]
            return {"message": "Drone deleted"}
    raise HTTPException(status_code=404, detail="Drone not found")


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8001, reload=True)
