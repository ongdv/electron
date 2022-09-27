const video = document.getElementById('camera');
const captureBtn = document.getElementById('captureBtn');
const img = document.getElementById('img');

captureBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL();
  console.log(dataUrl);
  img.src = dataUrl;
  window.electronAPI.sendImage(dataUrl);
  new Notification('Image Capture', {
    body: 'Image is successfully capture from live video',
  });
});

console.log(window.electronAPI);

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  console.log(stream);
  video.srcObject = stream;
});
