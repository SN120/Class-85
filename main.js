canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var NASA_mars_images = ["mars1.jpg", "mars2.jpg", "mars3.jfif", "mars4.jfif"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
var rover_width = 100;
var rover_height = 90;
var background_image = NASA_mars_images[random_number];
console.log("background image - " + background_image);
var rover_image = "rover.png";
rover2_image = "download.png";
rover2_y = 40;
rover2_x=40;
rover2_height = 90;
rover2_width = 100;

rover_x = 10;
rover_y = 10;

function add() {
    image_tag = new Image();
    image_tag.onload = upload_background;
    image_tag.src = background_image;

    rover_tag = new Image();
    rover_tag.onload = upload_rover;
    rover_tag.src = rover_image;

    rover2_tag = new Image();
    rover2_tag.onload = upload_rover2;
    rover2_tag.src = rover2_image;
}
function upload_background() {
    ctx.drawImage(image_tag, 0, 0, canvas.width, canvas.height);
}
function upload_rover() {
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height);
}
function upload_rover2() {
    ctx.drawImage(rover2_tag, rover2_x, rover2_y, rover2_width, rover2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_press = e.keyCode;
    if (key_press == '40') {
        down();
        console.log("down");
    }
    if (key_press == '38') {
        up();
        console.log("up");
    }
    if (key_press == '37') {
        left();
        console.log("left");
    }
    if (key_press == '39') {
        right();
        console.log("right");
    }
    if (key_press == '65') {
        a();
        console.log("a");
    }
    if (key_press == '66') {
        b();
        console.log("b");
    }
    if (key_press == '67') {
        c();
        console.log("c");
    }
    if (key_press == '68') {
        d();
        console.log("d");
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
        upload_rover2();
        console.log("When down arrow is pressed, x = " + rover_x + "y = " + rover_y);
    }
}
function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
        upload_rover2();
        console.log("When up arrow is pressed, x = " + rover_x + "y = " + rover_y);
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
        upload_rover2();
        console.log("When right arrow is pressed, x = " + rover_x + "y = " + rover_y);
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
        upload_rover2();
        console.log("When left arrow is pressed, x = " + rover_x + "y = " + rover_y);
    }
}
function a() {
    if (rover2_y <= 500) {
        rover2_y = rover2_y + 10;
        upload_background();
        upload_rover2();
        upload_rover();
        console.log("When a arrow is pressed, x = " + rover2_x + "y = " + rover2_y);
    }
}
function b() {
    if (rover2_y > 0) {
        rover2_y = rover2_y - 10;
        upload_background();
        upload_rover2();
        upload_rover();
        console.log("When b arrow is pressed, x = " + rover2_x + "y = " + rover2_y);
    }
}
function c() {
    if (rover2_x <= 700) {
        rover2_x = rover2_x + 10;
        upload_background();
        upload_rover2();
        upload_rover();
        console.log("When right arrow is pressed, x = " + rover2_x + "y = " + rover2_y);
    }
}
function d() {
    if (rover2_x >= 0) {
        rover2_x = rover2_x - 10;
        upload_background();
        upload_rover2();
        upload_rover();
        console.log("When left arrow is pressed, x = " + rover2_x + "y = " + rover2_y);
    }
}