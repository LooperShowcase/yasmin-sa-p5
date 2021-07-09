let img;
function preload() {
  img = loadImage('applelogo.png');
}


function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES)
  

}
function draw(){
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  // The same as doing: background(220); or --> background(220,220,220);
  background(43,45,66);   
  translate(width / 2 ,height / 2);
  image(img,-20,-35 , 60,60);

   rotate(-90);

  //  text(hours+":"+minutes+":"+seconds,width/2,height/2);
   noFill();
   stroke(255);
   strokeWeight(8);
  //  let secarc = map(seconds,0,60,0,360);
  //  arc(width/2,height/2, 300,300,0,secarc);

   stroke(141,153,174);
   let secarc = map(seconds,0, 60,0,360);
   arc (0, 0,300,300,0,secarc);

   stroke(237,242,244);
   let minarc = map(minutes,0, 60,0,360);
   arc (0,0,250,250 ,0,minarc);

   stroke(239,35,60);
   let harc = map(hours %12,0,12,0,360);
   arc (0, 0,200,200,0,harc);

   stroke(6,214,160);
   push();
   rotate(secarc)
   line(0,0,150,0);
   pop();

  stroke(255,209,102);
   push();
   rotate(minarc)
   line(0,0,125,0);
   pop();

   stroke(239,71,111);
   push();
   rotate(harc);
   line(0,0,102,0);
   pop();

    rotate(90);
    strokeWeight(1);
    text("12",0,-165);
    text("3",160,0);
    text("6",0,180);
    text("9",-175,0)
    textSize(30);
    }
