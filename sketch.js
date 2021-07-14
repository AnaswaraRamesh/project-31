var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;0
  const Body = Matter.Body

 var particle1
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
  particle1 = new Particle(200,100,20);
  
  //create division objects
  for (var k = 0; k <=250; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 3rd division 
  for (var k = 0; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  // 4th division
  for (var k = 0; k <=550; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=650; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=750; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  

  //create 1st row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);  

  //create particle objects
 
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
 particle1.display();
 if(frameCount % 60 ===0){
  particles.push(new Particle(random(width/2-100, width/2+10), 10,20))
}
  
  //display the paricles 
  for (var p = 0; p < particles.length; p++) { 
    particles[p].display();  
}
}