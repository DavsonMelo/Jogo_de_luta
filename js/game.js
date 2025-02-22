const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024;
const canvasHeight = 576;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let prevTime = performance.now();

animate();

function animate() {
  window.requestAnimationFrame(animate)

  handleControls();

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  background.draw();
  player.update();
  //player2.update();

  let delta = (performance.now() - prevTime) / 1000;
  let fps = 1 / delta;

  prevTime = performance.now();

}