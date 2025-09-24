const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Task text
  const span = document.createElement("span");
  span.textContent = text;

  // Toggle completed on checkbox
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => {
    li.classList.add("removed");
    setTimeout(() => li.remove(), 300);
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

// Add task on click
addBtn.addEventListener("click", addTask);

// Add task on Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
