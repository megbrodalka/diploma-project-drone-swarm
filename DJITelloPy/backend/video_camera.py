"""
Webcam streaming: https://medium.com/@jadomene99/integrating-your-opencv-project-into-a-react-component-using-flask-6bcf909c07f4
cv2 install: python3 -m pip install --force-reinstall --no-cache -U opencv-python==4.5.5.62
"""

import cv2


class VideoCamera:
    def __init__(self):
        self.video = None

    def start_streaming(self):
        self.video = cv2.VideoCapture(0)  # Default webcam

    def stop_streaming(self):
        if self.video is not None:
            self.video.release()
            self.video = None

    def get_frame(self):
        if self.video is not None:
            ret, frame = self.video.read()
            ret, jpeg = cv2.imencode('.jpg', frame)
            return jpeg.tobytes()

    def generate_frames(self):
        while self.video is not None:
            frame = self.get_frame()
            if frame is not None:
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
