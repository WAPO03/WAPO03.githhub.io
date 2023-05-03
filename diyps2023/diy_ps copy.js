var img, img2;
var initials ='mm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://wapo03.github.io/WAPO03.githhub.io/Tadoe-3430152847.jpeg');
  img2= loadImage('https://wapo03.github.io/WAPO03.githhub.io/Simple clay pot-294717.png');
}


function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(3);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(255, 255, 0);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool
    
    stroke(6, 122, 33);
    fill(4, 189, 36);
    strokeWeight(10);
    ellipse(mouseX, mouseY, 55, 25);
  } else if (toolChoice == '4') {
    
    stroke(5, 99, 27);
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
   stroke(194, 31, 31);
   strokeWeight(20);
   line(mouseX, mouseY, pmouseX, pmouseY)
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(0);
    strokeWeight(1);
    fill(random(255), random(255), random(255));
    circle(mouseX, mouseY, random(100), random(100));
  } else if (toolChoice == '7') {
    
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20, 55, 20, 15, 10, 5);
  } else if (toolChoice == '8' || toolChoice == '8') { // 8 places the image we pre-loaded
    image(img2, mouseX-25, mouseY-25, 100, 100);
  } else if (toolChoice == '9') {

    stroke(48, 200, 255);
    fill(48, 200, 255);
    rect(mouseX, mouseY, 200, 200);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(50), random(50));
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 300, 300);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
