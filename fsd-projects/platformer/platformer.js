$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms /* MAKE THEM COLORED IN CSS */
     createPlatform(350, 610, 350, 130)
     createPlatform(700, 510, 200, 230)
     createPlatform(900, 420, 105, 15)
     createPlatform(1050, 550, 60, 15)
     createPlatform(1125, 680, 60, 15)
     createPlatform(450, 420, 105, 15)
     createPlatform(1105, 380, 30, 15)
     createPlatform(1275, 250, 15, 7)
     createPlatform(1390, 120, 15, 7)
    // TODO 3 - Create Collectables /* Make them labubus */
     createCollectable("labubu", 525, 565, 1, .5)
     createCollectable("labubu", 800, 465, 1, .5)
     createCollectable("labubu", 480, 365, 1, .5)
     createCollectable("labubu", 1300, 675, 1, .5)
     createCollectable("labubu", 1360, 85, 1, .5)
    // TODO 4 - Create Cannons
     createCannon("right", 200, 750)
     createCannon("right", 325, 1500)
     createCannon("right", 775, 2000)
     createCannon("top", 610, 2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
