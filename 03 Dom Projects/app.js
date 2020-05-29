// Define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listeners
loadEventLitsener();

// Load all event listeners
function loadEventLitsener() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  // Create text node and append to li
  const textNode = document.createTextNode(taskInput.value);
  li.appendChild(textNode);
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear task
  taskInput.value = '';

  // console.log(li);
  e.preventDefault();
}