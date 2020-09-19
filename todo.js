const toDoform = document.querySelector(".js-toDoForm");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO = 'toDos';
let toDos = [];

function deleteToDo(event){
    console.log(event.target.parentNode)
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, li.id);
        return toDo.id != parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO, JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    li.className = "toDo";
    const delBtn = document.createElement("span");
    const span = document.createElement("span");
    const newId = toDos.length + 1    
    delBtn.innerHTML = "✘";
    delBtn.className = "toDo_button";
    delBtn.addEventListener("click", deleteToDo);
    const label = document.createElement("label");
    label.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(label);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function something(toDo){
    console.log(toDo.text);
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODO);

    if(loadedtoDos != null){
        // console.log(loadedtoDos);
        const parsedToDos = JSON.parse(loadedtoDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();