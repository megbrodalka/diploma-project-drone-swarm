"""
Webcam streaming: https://medium.com/@jadomene99/integrating-your-opencv-project-into-a-react-component-using-flask-6bcf909c07f4
cv2 install: python3 -m pip install --force-reinstall --no-cache -U opencv-python==4.5.5.62
"""

import cv2
import cv2.data
file = "haarcascade_frontalface_default.xml"


class VideoCamera:
    def __init__(self):
        self.video = None
        self.face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+"haarcascade_frontalface_default.xml")

    def start_streaming(self):
        self.video = cv2.VideoCapture(0)  # Default webcam
        if self.face_cascade.empty():
            raise ValueError("Failed to load the cascade classifier.")

    def stop_streaming(self):
        if self.video is not None:
            self.video.release()
            self.video = None

    def detect_faces(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = self.face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
        return faces

    @staticmethod
    def draw_boxes(frame, faces):
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)
        return frame

    def get_frame(self):
        if self.video is not None:
            ret, frame = self.video.read()
            if ret:
                faces = self.detect_faces(frame)
                frame_with_boxes = self.draw_boxes(frame, faces)
                ret, jpeg = cv2.imencode('.jpg', frame_with_boxes)
                return jpeg.tobytes()

    def generate_frames(self):
        while self.video is not None:
            frame = self.get_frame()
            if frame is not None:
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
