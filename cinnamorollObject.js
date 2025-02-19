
let time = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  let fov = 60.0;  // 60 degrees FOV
  perspective(PI * fov / 180.0, width / height, 0.1, 2000);
}

//I really tried to recreate the Sanrio cinnamoroll character but uhhh, yeah... this is my imagination now... it has a tomato hat and fairy wings

function draw() {
  background(255, 255, 255);
  rotateY(time * 0.5);
  time += 0.02;
  // set the virtual camera position
  // camera(0, 0, 85, 0, 0, 0, 0, 1, 0);  // from, at, up
  
  // include some light even in shadows
  ambientLight(60, 60, 60);
  
  // set light position
  pointLight(255, 255, 255, 100, -100, 300);

  noStroke();  // don't draw polygon outlines
  
  
  //tomato hat, I love tomatoes (I say it's a vegetable, not a fruit)
  push()
  translate(0, -60, 0);
  fill(255, 40, 40);
  rotateX(PI / 5.0);
  scale(1.2, 1, 1);
  sphere(30);
  
  
  //leaves
  fill(34, 139, 34);
  push();
  translate(0, -25, 0);
  for (let i = 0; i < 5; i++) {
    push();
    rotateY(i * PI / 2.5);
    rotate(PI / 6.0);
    scale(1, 0.3, 1);
    sphere(15);
    pop();
  }
  pop();
  pop();
  
  //head
  push();
  fill(244, 251, 255);
  scale(1.5, 1, 1);
  sphere(50);
  pop();
  
  //ears
  push();
  fill(244,251,255);
  translate(-75, -10, 0);
  rotateZ(-PI / 6.0);
  for (let i = 0; i < 5; i++) {
    push();
    translate(i * -12.0, sin(i * 0.6) * 10, 0);
    scale(1.5 - (i * 0.2), 0.8, 1.5);
    sphere(20);
    pop();
  }
  pop();
  
  push();
  fill(244,251,255);
  translate(75, -10, 0);
  rotateZ(PI / 6.0);
  for (let i = 0; i < 5; i++) {
    push();
    translate(i * 12, (sin(i * 0.6)) * 10, 0);
    scale(1.5 - (i * 0.2), 0.8, 1.5);
    sphere(20);
    pop();
  }
  pop();
  
  //eyes
  push();
  fill(76, 180, 240);
  translate(-40, -1.5, 45);
  ellipsoid(5, 7, 5);
  pop();
  
  push()
  fill(76, 180, 240);
  translate(40, -1.5, 45);
  ellipsoid(5, 7, 5);
  pop();
  
  //mouth
  push();
  strokeWeight(1.5);
  stroke(0);
  fill(246, 212, 227);
  translate(0, 10, 48);
  beginShape();
  vertex(-15, 2, 0);
  vertex(15, 2, 0);
  vertex(0, 13, 0);
  vertex(-15, 2, 0);
  endShape();
  pop();
  
  //body
  push()
  fill(244, 251, 255);
  translate(0, 70, 0);
  scale(1, 1.2, 1);
  sphere(40);
  pop();
  
  //legs
  push();
  fill(244, 251, 255);
  translate(-25, 110, 0);
  scale(1, 0.5, 1);
  sphere(20);
  pop();
  
  push();
  fill(231, 241, 246);
  translate(25, 110, 0);
  scale(1, 0.5, 1);
  sphere(20);
  pop();
  
  //arms
  push();
  fill(244, 251, 255);
  translate(40, 65, 0);
  rotateZ(PI / -4.0);
  scale(1, 0.5, 1);
  sphere(20);
  pop();
  
  push();
  fill(244, 251, 255);
  translate(-40, 70, 0);
  scale(1, 0.5, 1);
  sphere(20);
  pop();
  
  //little fairy wings (it can fly I say)
  push();
  fill(255, 182, 193, 115);
  translate(-10, 50, -40)
  rotateY(PI / 6.0);
  rotateX(PI / 6.0);
  scale(1, 0.8, 1);
  ellipsoid(10, 30, 5);
  pop();
  
  push();
  fill(255, 182, 193, 115);
  translate(10, 50, -40);
  rotateY(-PI / 6.0);
  rotateX(PI / 6.0);
  scale(1, 0.8, 1);
  ellipsoid(10, 30, 5);
  pop();
  
  push();
  translate(-10, 75, -40);
  fill(255, 182, 193, 115);
  rotateY(PI / 6.0);
  rotateX(-PI / 6.0);
  scale(1, 0.8, 1);
  ellipsoid(10, 30, 5);
  pop();
  
  push();
  fill(255, 182, 193, 115);
  translate(10, 75, -40);
  rotateY(-PI / 6.0);
  rotateX(-PI / 6.0);
  scale(1, 0.8, 1);
  ellipsoid(10, 30, 5);
  pop();
  
  //tail
  push();
  fill(244, 251, 255);
  translate(0, 90, -30);
  sphere(15);
  pop();
}

