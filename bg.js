const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log('finished loading');
}

function paintImage(imgNumber){
    const image = new Image();
    //image.src = `https://github.com/crebiz76/JavaScript/blob/master/images/${imgNumber + 1}.jpg`;
    //image.src = `/images/${imgNumber + 1}.jpg`;
    image.src = `./images/${imgNumber + 1}.png`;
    //image.src = `./tree/master/images/${imgNumber + 1}.jpg`;
    //image.src = `https://crebiz76.github.io/JavaScript/images/${imgNumber + 1}.jpg`;
    // image.addEventListener("loadend", handleImgLoad());
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    // console.log(randomNumber);
    paintImage(randomNumber);
}

init();