const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   // Draw 4 frogs facing different directions
   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);   
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {   
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   switch (direction) {
      case directions.DOWN:
         context.translate((x + frogImg.width / 2), (y + frogImg.height / 2));
         context.rotate(180 * Math.PI/180);
         context.translate(-102.5, -102);
         break;
      case directions.LEFT:
         context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
         context.rotate(-90 * Math.PI/180);
         context.translate(-102.5, -102); 
         break;
      case directions.RIGHT:
         context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
         context.rotate(90 * Math.PI/180);
         context.translate(-102.5, -102);
         break;
   }


   context.drawImage(frogImg, x, y);

   // Necessary so next call to drawFrog isn't rotated or translated
   context.resetTransform();
}