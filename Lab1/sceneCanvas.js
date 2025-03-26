const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = 'images/park.jpg';

const foreground1 = new Image();
foreground1.src = 'images/dog.png';

const foreground2 = new Image();
foreground2.src = 'images/bird.png';

// Draw the scene once all images are loaded
let imagesLoaded = 0;

function checkLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 3) {
        drawScene();
    }
}

// onload handlers
background.onload = checkLoaded;
foreground1.onload = checkLoaded;
foreground2.onload = checkLoaded;

// Draw the complete scene
function drawScene() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(foreground1, 100, 400, 200, 150); 
    ctx.drawImage(foreground2, 500, 100, 250, 200); 

    ctx.font = '30px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText('Elizabeth Lodvikov', 30, 50);
    ctx.fillText('Lab 1 - Scene', 30, 90);
}