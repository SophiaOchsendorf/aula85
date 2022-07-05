canvas = document.getElements('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];
 random_number = Math.floor(Math.random() * 4);
  console.log(random_number);


roverWidth = 100;
roverHeight = 90;

background_image = nasa_mars_images_array[random_number];
 console.log("background_image = " + background_image);
 rover_image = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
    backgroundImgTag.onload = uploadBackground; //ajustando uma função, ao carregar essa variável
    backgroundImgTag.src = background_image;   //carregar a imagem

    rover_imgTag = new Image(); //definindo uma variável com uma nova imagem
    rover_imgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
    rover_imgTag.src = roverImage;   //carregar a imagem

}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.height);

}

function uploaddrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
   
}
     



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {

        up();
        console.log("cima");

    }
    if(keyPressed == '40')
    {

        down();
        console.log("baixo");

    }
    if(keyPressed == '39')
    {

        right();
        console.log("direita");

    }

}

 function up() 
 {
    
    if(rover_y >=0) 
    {

        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover);
        uploadBackground();
        uploadrover();

    }

}
function down()
{

    if(rover_y <=500)
    {

        rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
        uploadrover();

    }

}
function left()
{

    if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	