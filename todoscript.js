script.js

const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener for Add button
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    addTaskToList(taskText);
    taskInput.value = ""; // Clear input field after adding task
  }
});

// Function to add task to the list
function addTaskToList(taskText) {
  const li = document.createElement('li');

  // Create task text node
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  
  // Create button to remove task
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  
  // Add event listener to remove button
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append elements to the list item
  li.appendChild(taskContent);
  li.appendChild(removeBtn);

  // Add event listener to mark task as complete
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Append new task to the list
  taskList.appendChild(li);
}
