import uvicorn
from fastapi import FastAPI
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from djitellopy import TelloSwarm
from starlette.responses import StreamingResponse

from backend.models import Drone
from backend.video_camera import VideoCamera

app = FastAPI()
camera = VideoCamera()
swarm = None

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

drones = [
    Drone(id=1, name="Drone 1", ip="10.25.35.130", status="Landed", battery="100%"),
    Drone(id=1, name="Drone 2", ip="10.25.35.130", status="Flying", battery="100%"),
    # Drone(id=2, name="Drone 2", ip="192.168.1.2", status="Flying", battery="50%"),
    # Drone(id=3, name="Drone 3", ip="192.168.1.3", status="Flying", battery="40%"),
    # Drone(id=4, name="Drone 4", ip="192.168.1.4", status="Landed", battery="90%"),
    # Drone(id=5, name="Drone 5", ip="192.168.1.5", status="Landed", battery="50%"),
    # Drone(id=6, name="Drone 6", ip="192.168.1.6", status="Flying", battery="60%"),
    # Drone(id=7, name="Drone 7", ip="192.168.1.7", status="Landed", battery="70%"),
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


# Patch for updating battery, isFlying status
@app.patch("/api/drones/{drone_id}/battery")
def get_battery(drone_id: int):
    pass


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


@app.post("/api/disconnect")
async def disconnect_drones():
    global swarm
    swarm.end()
    return {"message": "Success"}


@app.get("/api/live_feed")
async def live_feed():
    return StreamingResponse(camera.generate_frames(),
                             media_type='multipart/x-mixed-replace; boundary=frame')


@app.get("/api/start_stream")
async def start_stream():
    if camera.video is None:
        camera.start_streaming()
        return {"message": "Stream started"}
    else:
        return {"message": "Stream already running"}


@app.get("/api/stop_stream")
async def stop_stream():
    if camera.video is not None:
        camera.stop_streaming()
    return {"message": "Stream stopped"}


@app.post("/api/takeoff")
async def takeoff():
    global swarm
    swarm.takeoff()
    return {"message": "Take off success"}


@app.post("/api/land")
async def land():
    global swarm
    swarm.land()
    return {"message": "Land success"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
