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
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task
  taskList.addEventListener('click', removeTask);
  // Clear task
  clearBtn.addEventListener('click', clearAllTasks);
  // Filter task
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    // Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    const textNode = document.createTextNode(task);
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
  });
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

  // Store in LS
  storeTaskinLocalStorage(taskInput.value);
  
  // Clear task
  taskInput.value = '';

  // console.log(li);
  e.preventDefault();
}

function storeTaskinLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  e.preventDefault();
}

function removeFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // console.log(taskItem.textContent);
  tasks.forEach((task, index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTasks(e) {
  // taskList.innerHTML = '';

  // Faster Approach
  if (confirm('Are you want delete all the tasks?')) {
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }

  e.preventDefault();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  // QuerySelectorAll returns a node list
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}