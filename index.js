const imgTag = document.getElementById('img');
window.electronAPI.getImage((event, data) => {
  img.src = data;
  window.electronAPI.closeWindow2();
});
