const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() { //현재 toDos를 로컬 스토리지에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { //li 삭제
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //클릭한 li를 제외한 toDo만 return
    saveToDos();
}

function paintToDo(newTodo) { //li 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmin(e){ // submit하면 값 toDos에 저장
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { //toDo마다 랜덤 id 지급
      text:newTodo,
      id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
} 

toDoForm.addEventListener("submit", handleToDoSubmin);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //로컬스토리지 저장된 toDos 가져오기
    toDos = parsedToDos; //toDos에 기존 로컬스토리지 toDo를 저장
    parsedToDos.forEach(paintToDo); //toDos li로 뿌려주기
}