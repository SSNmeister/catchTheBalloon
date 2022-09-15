# Catch The Balloon
Play the game and catch the Balloon!

## 1. Overview
This project is a 2D side scrolling game where a player must get to the finishing line, while avoiding obstacles along the way, to complete the game. The player will be able to test their skills by selecting the different difficulty modes the game offers.
<br> <br> Damien a devoted Kung Fu master is tired of Man-kind and the damages man have done to Mother Earth. <br> After years of farming and mining BTC, Damien has saved enough to challenge Elon Musk in building the next generation Green technology. <br> To save Earth, it is vital that Damien catches the Bang Balloon to Austin, Texas, United States...

# Table of Contents

1. [ Canvas ](#canvas)
2. [ Classes ](#classescreation)


<a name="canvas"></a>
## 1. Canvas Creation
Create a 2D canvas which will act as your blank space to draw your game "items" on. First create a canvas on HTML, and define the canvas's properties such as width and height. 
```
canvas.width = 1024;
canvas.height = 576;
```


<a name="classescreation"></a>
## 2. Classes Creation
<p> Create the individual classes of the various items that will be drawn onto the canvas. These classes will define the key properties of the items such as position and velocity.</p> Here are some examples of the classes.
<li>Player class</li>
<li>Enemy class</li>
<li>Platform class</li>
<li>Background class</li>
<li>Item class</li>


<a name="playercreation"></a>
<h3>1. Player Creation</h3>
<p>The Player is created using the Class keyword followed by the method constructor(). An example of creating the player class is shown here:


class Player {
  constructor() {
    this.speed = 6;                             //player's speed
    this.speedY = 10;
    this.position = {                           //player's starting position
      x: 0,
      y: 480,
    };
    this.width = 66;                            //player's width and height
    this.height = 120;
    this.velocity = {                           //player's velocity
      x: 0,
      y: 0,
    };


<p>The player's properties such as velocity, starting position on the canvas, width and height are defined within.</p>

<p>The second part of the player class dictates the drawing method that will be used for the player.</p>


draw() {
    //If you define a function called "draw" in your code, then that function will get called repeatedly, about 60 times per second.
    c.drawImage(
      this.image,
      200 * this.frames, //flipping image through a sprite sheet, 200px per frame
      0,
      200, //cropping image from sprite sheet
      400, //cropping image from sprite sheet
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    //updating player's y position with gravity on the canvas
    this.draw();
    // this.frames += 1;
    // if (this.frames > 19) this.frames = 0;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity; //acceleration to "gravity"
    }
  }
  

<a name="platformcreation"></a>
<h3>2. Platform Creation</h3>

<p>The Platform is created using the Class keyword followed by the method constructor(). An example of creating the platform class is shown here:


class Platform {
  //platform's properties
  constructor({ x, y, image }) {
    //platform's starting position (object)
    this.position = {
      x: x,
      y: y,
    };

    this.image = image;

    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}


<p>The platform's properties such as starting position on the canvas, width and height and "image to use" are defined within.</p>

<a name="movingplatformcreation"></a>
<h3>3. Moving Platform Creation</h3>

sometext

<a name="bouldercreation"></a>
<h3>4. Boulder Creation</h3>

sometext

<a name="backgroundcreation"></a>
<h3>5. Background Creation</h3>

sometext
