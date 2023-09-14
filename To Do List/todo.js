
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];



function addTodo() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      
      todoList.push({ text: taskText, completed: false });
  
      
      const taskList = document.getElementById("task-list");
      const newTaskItem = document.createElement("li");
      newTaskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-danger btn-sm float-right ml-2" onclick="removeTodo(this)">Sil</button>
        <button class="btn btn-success btn-sm float-right" onclick="completeTodo(this)">Yapıldı</button>
      `;
      taskList.appendChild(newTaskItem);
  
      
      showToast("success", "Ekleme başarılı.");
  
      
      taskInput.value = "";
  
      
      updateLocalStorage();
    } else {
      
      showToast("error", "Listeye boş ekleme yapamazsınız!");
    }
  }
  


function removeTodo(button) {
    const taskText = button.previousElementSibling.textContent;
    const taskIndex = todoList.findIndex((task) => task.text === taskText);

    if (taskIndex !== -1) {
        
        todoList.splice(taskIndex, 1);


        const taskItem = button.parentElement;
        taskItem.remove();

        
        updateLocalStorage();
    }
}


function completeTodo(button) {
    const taskText = button.previousElementSibling.previousElementSibling.textContent;
    const taskIndex = todoList.findIndex((task) => task.text === taskText);

    if (taskIndex !== -1) {
        
        todoList[taskIndex].completed = true;


        const taskSpan = button.previousElementSibling.previousElementSibling;
        taskSpan.style.textDecoration = "line-through";


        updateLocalStorage();
    }
}


function updateLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


function showToast(type, message) {
    const toast = document.querySelector(`.toast.${type}`);
    const toastBody = toast.querySelector(".toast-body");
    toastBody.innerText = message;
    $(toast).toast("show"); 
}


document.addEventListener("DOMContentLoaded", function () {
    
    const taskList = document.getElementById("task-list");
    todoList.forEach((task) => {
        const newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `
      <span style="${task.completed ? 'text-decoration: line-through;' : ''}">${task.text}</span>
      <button class="btn btn-danger btn-sm float-right ml-2" onclick="removeTodo(this)">Sil</button>
      <button class="btn btn-success btn-sm float-right" onclick="completeTodo(this)">Yapıldı</button>
    `;
        taskList.appendChild(newTaskItem);
    });


    const addBtn = document.getElementById("liveToastBtn");
    addBtn.addEventListener("click", addTodo);
});
