const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color="red"
}
title.addEventListener("click", handleClick);

const BASE_COLOR = "#34495e";

function init(){
    title.style.color = BASE_COLOR;
}



init();

function handleOnline(){
    console.log("Welcome Back");
}

function handleOffline(){
    console.log("Bye Bye");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


