let moving = false; //lines 1-3 are creating variable to make 
let moveimage;  //it easier later in functions 
let image = null; //control where the image is and if it is moving

function start() { //creating start function
    if (!moving) {  //if image is not moving 
        document.getElementById("start").disabled = true; //disable start button
        document.getElementById("stop").disabled = false; // enable stop button
        moving = true; // setting moving to true in order to move it in next function
        image = document.getElementById("image"); // getting meme image
        moveright(); //calling move right function
    }
}

function stop() { //creating stop function
    if (moving) { //if image is moving
        document.getElementById("start").disabled = false; //enable start button
        document.getElementById("stop").disabled = true; // disable stop button
        moving = false; /// setting moving to false in order to stop image
        clearInterval(moveimage); // clear inverterval stops the moving interval variable
    }
}

function moveright() { //creating move right function
    let left = parseInt(image.style.left) || 0; // here we convert string to interger and set it to variable left
 //if we convert image to integer, it will be easier to manipulate the if statement to set for 300 pixels
    moveimage = setInterval(() => { 
        left += 5; // Adjust the amount by which the image moves to the right
        image.style.left = left + "px"; 
        if (left >= 300) { //if left is greater than 300 pixels it will stop the movement
            clearInterval(moveimage);}
    }, 100); // Adjust the interval to control the speed of movement
}