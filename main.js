function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

keyPressed = e.keycode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up")
}
if(keyPressed == '40')
{
    down();
    console.log("down")
}
if(keyPressed == '37')
{
    left();
    console.log("left")
}
if(keyPressed == '39')
{
    right();
    console.log("right")
}
}
function up(){

if(rover_y >=0)
{
    rover_y = rover_y - 10
    console.log("when up arrow is pressed, x = " +rover_x +"| y = " +rover_y);
    uploadBackround();
    uploadrover();
}
}
function down(){

    if(rover_y >=500)
    {
        rover_y = rover_y+ 10;
        console.log("when  down is pressed, x = " +rover_x +"| y = " +rover_y);
        uploadBackround();
        uploadrover();
    
    }

}

function left(){

if(rover_y >=0)
{
    rover_y = rover_y - 10;
    console.log("when  down is pressed, x = " +rover_x +"| y = " +rover_y);
    uploadBackround();
    uploadrover();

}
}



function right(){

    if(rover_y >=700)
    {
        rover_y = rover_y+ 10;
        console.log("when right is pressed, x = " +rover_x +"| y = " +rover_y);
        uploadBackround();
        uploadrover();
    
    }
}

