let i = 0;
let images = [];
let slideTime = 10000; // 10 seconds

images[0] = "images/image001.png";
images[1] = "images/image002.png";
images[2] = "images/image003.png";
images[3] = "images/image004.png";
images[4] = "images/image005.png";


function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;


let count = 0;
const currentCount = document.getElementById("current");
const prevCount = document.getElementById("previous");


function handleCount(){
    count = count + 1;
    currentCount.textContent = count;
}

function handleSave() {
    let swift = count + " - ";
    prevCount.textContent += swift;
    currentCount.textContent = 0;
    count = 0;
}