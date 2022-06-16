// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   var canvas = document.querySelector("canvas");
   
   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);  
   drawSnowflakes(canvas);   
});

function drawGround(canvas) {
   var context = canvas.getContext("2d");

   // background 
   context.fillStyle = "lightgray";
   context.fillRect(0, 0, 300, 300);

   // ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 50, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
   for (var c = 0; c < 100; c++) {
      var x = Math.floor(Math.random() * canvas.width);
      var y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

// Complete the functions below

function drawSnowText(canvas) {
   let context = canvas.getContext("2d");

   context.font = `80px Verdana`;
   context.textAlign = `center`;
   context.textBaseline = `top`;
   context.fillStyle = `blue`;
   context.fillText("SNOW",canvas.width/2,10);
}

function drawSnowman(canvas) { 
   let context = canvas.getContext("2d");

   
   context.beginPath();
   context.arc(150, 200, 50, 0, 2 * Math.PI);
   context.fillStyle = "white";
   context.fill();
   context.beginPath();
   context.arc(150, 120, 40, 0, 2 * Math.PI);
   context.fillStyle = "white";
   context.fill();
   context.beginPath();
   context.arc(150, 60, 25, 0, 2 * Math.PI);
   context.fillStyle = "white";
   context.fill();
}

function drawSingleFlake(canvas, x, y) {
   let context = canvas.getContext("2d");

   context.moveTo(x,y);
   context.lineTo(x+flakeSize/2,y+flakeSize/2);
   context.lineTo(x,y+flakeSize);
   context.lineTo(x-flakeSize/2,y+flakeSize/2);
   context.fillStyle = "white";
   context.fill();
}
