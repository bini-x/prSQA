const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const buttonDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  const modifyButton = document.createElement("button");
  modifyButton.classList.add("modifyButton");
  modifyButton.textContent = "Modifiko";
  deleteButton.textContent = "Fshij";
  const dueDate = document.createElement("p");
  const now = new Date().toLocaleDateString();
  const date = new Date(
    prompt("Sheno daten e perfundimit(formati: MM/DD/YYYY): ")
  );
  const datePrompt = date.toLocaleDateString();
  if (now > datePrompt) {
    alert("Gabim");
  }
  dueDate.textContent = `Data e Fundit: ${datePrompt}`;
  dueDate.classList.add("dueDate");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  modifyButton.addEventListener("click", () => {
    const editedTask = prompt("Modifiko Detyren");
    taskList.removeChild(li);
    addTask(editedTask);
  });
  li.appendChild(dueDate);
  li.appendChild(buttonDiv);
  buttonDiv.appendChild(modifyButton);
  buttonDiv.appendChild(deleteButton);
  taskList.appendChild(li);
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";

  function setDate() {}
});
