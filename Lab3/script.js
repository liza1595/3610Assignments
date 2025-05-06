const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

const bgRadios = document.querySelectorAll("input[name='background']");
const slider = document.getElementById("positionSlider");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

let charX = 200;

function drawScene() {
  // Background
  let bg = Array.from(bgRadios).find(r => r.checked).value;
  if (bg === "1") {
    ctx.fillStyle = "#87ceeb"; // Sky
  } else if (bg === "2") {
    ctx.fillStyle = "#228b22"; // Forest
  } else {
    ctx.fillStyle = "#191970"; // Night
  }
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Items
  if (item1.checked) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fill(); 
  }

  if (item2.checked) {
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(100, 200, 20, 50); 
    ctx.beginPath();
    ctx.moveTo(90, 200);
    ctx.lineTo(130, 200);
    ctx.lineTo(110, 150);
    ctx.closePath();
    ctx.fill(); 
  }

  if (item3.checked) {
    ctx.fillStyle = "lightgray";
    ctx.beginPath();
    ctx.arc(450, 50, 20, 0, Math.PI * 2);
    ctx.fill(); 
  }

  // images
  ctx.fillStyle = "red";
  ctx.fillRect(charX, 250, 20, 20)
}

function update() {
  charX = parseInt(slider.value);
  drawScene();
}

function playSound(num) {
    const sound = document.getElementById(`sound${num}`);
    sound.currentTime = 0;
    sound.play();
  }

// Add event listeners
bgRadios.forEach(radio => radio.addEventListener("change", update));
slider.addEventListener("input", update);
[item1, item2, item3].forEach(cb => cb.addEventListener("change", update));

// Initial draw
drawScene();
