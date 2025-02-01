function setup() {
    let canvas = createCanvas(200, 200);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2); // Center the canvas
    colorMode(HSB);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
  
    // Left Eye
    let leftX = width / 2 - 50;
    let leftY = height / 2;
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  
    // Right Eye
    let rightX = width / 2 + 50;
    let rightY = height / 2;
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  }
  
  function windowResized() {
    resizeCanvas(400, 400);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2); // Recenter on resize
  }
  