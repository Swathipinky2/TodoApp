const inputEle = document.getElementById("inputEl");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = inputEle.value.trim();
  if (taskText !== "") {
    const Listitem = document.createElement("li");

    Listitem.innerHTML = `
    <span>${taskText}</span> 
    <button class="btn" onclick = "deleteTask(this);">Delete</button>
    `

    taskList.appendChild(Listitem);

    inputEle.value = "";
  }
}

function deleteTask(button) {
  const Listitem = button.parentElement;
  taskList.removeChild(Listitem);
}

