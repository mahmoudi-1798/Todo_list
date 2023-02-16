//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(Event){
    //prevent from submiting
    Event.preventDefault();
    
    //testing
    //console.log("hello");

    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);   
    
    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);    
    
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //Append to list
    todoList.appendChild(todoDiv);
    
    //Clear Input value
    todoInput.value = "";
}

function deleteCheck(Event){
    const item = Event.target;
    const todo = item.parentElement;

    //Deleting todo
    if (item.classList[0] === "trash-btn"){
        todo.remove();
    }

    //Checking todo
    if (item.classList[0] === "complete-btn"){
        todo.classList.toggle('completed');
    }
} 

