// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g
let bg ;
var population;
// Each rocket is alive till 400 frames
var lifespan = 1500;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.5;

var s = 0 ;



// Dimensions of barrier
var rx = [0,0,0,1310,10,110,110,210,210,450,450,550,550,750,627,750];
var ry = [0,10,710,10,600,160,150,260,250,260,360,160,260,120,0,120];
var rw = [1320,10,1320,10,100,10,450,10,250,10,300,10,75,10,10,600];
var rh = [10,700,10,700,10,450,10,450,10,100,10,100,10,250,270,10];




function setup() {
  var canvas = createCanvas(1320, 720);
  canvas.parent('container');
  population = new Population();
  lifeP = createP();
  target = createVector(1250, 60);
  
}

function draw() {
  background(0);
  stroke(226, 204, 0);
  population.run();
  // Displays count to window
  population.f();
  lifeP.html(s);
  count++;

  if (s >= this.population.popsize/1.3) {
    let a = "{{G|safe}}";
    console.log(a);
    
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
    s = 0;
  }else{
    s = 0;
  }
  // Renders barrier for rockets
  fill(255);
  for (var c = 0;c<rx.length;c++){
    rect(rx[c], ry[c], rw[c], rh[c]);
  }
  // Renders target
  ellipse(target.x, target.y, 60, 60);
}
