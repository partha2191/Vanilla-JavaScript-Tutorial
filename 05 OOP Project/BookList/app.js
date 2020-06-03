// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  console.log(row);
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.deleteBook = function(target) {
  // console.log(target);
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFormFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, classname) {
  // Create element
  const div = document.createElement('div');
  div.className = `alert ${classname}`;
  div.appendChild(document.createTextNode(msg));
  // Get Parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 2000);
}

document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI 
  const ui = new UI();

  // Validation
  if(title == '' || author == '' || isbn == '') {
    const alert = document.querySelector('.alert');
    if(!alert) ui.showAlert('Please fill all the fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFormFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate UI 
  const ui = new UI();

  ui.deleteBook(e.target);
  ui.showAlert('Book Deleted!', 'success');
  e.preventDefault();
});