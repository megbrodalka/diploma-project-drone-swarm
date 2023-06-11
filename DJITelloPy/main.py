import uvicorn
import cv2  # python3 -m pip install --force-reinstall --no-cache -U opencv-python==4.5.5.62
from fastapi import FastAPI, Response
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from djitellopy import TelloSwarm
from starlette.responses import StreamingResponse

app = FastAPI()
swarm = None

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Drone(BaseModel):
    id: int = 0
    name: str
    ip: str
    status: str = "Landed"
    battery: str = "100%"

class VideoCamera:
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        ret, frame = self.video.read()
        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()


drones = [
    Drone(id=1, name="Drone 1", ip="192.168.1.1", status="Landed", battery="100%"),
    Drone(id=2, name="Drone 2", ip="192.168.1.2", status="Flying", battery="50%"),
    Drone(id=3, name="Drone 3", ip="192.168.1.3", status="Flying", battery="40%"),
    Drone(id=4, name="Drone 4", ip="192.168.1.4", status="Landed", battery="90%"),
    Drone(id=5, name="Drone 5", ip="192.168.1.5", status="Landed", battery="50%"),
    Drone(id=6, name="Drone 6", ip="192.168.1.6", status="Flying", battery="60%"),
    Drone(id=7, name="Drone 7", ip="192.168.1.7", status="Landed", battery="70%"),
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


def generate_frames(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.get("/api/live_feed")
async def live_feed():
    return StreamingResponse(generate_frames(VideoCamera()),
                    media_type='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
