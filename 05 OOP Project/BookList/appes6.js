class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  deleteBook(target) {
    // console.log(target);
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(msg, classname) {
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
}

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static deleteBook(isbn) {
    const books = Store.getBooks();
    // console.log(isbn);
    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1)
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

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
    // Add book to UI
    ui.addBookToList(book);
    // Add book to LS
    Store.addBook(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFormFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate UI 
  const ui = new UI();

  ui.deleteBook(e.target);
  Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert('Book Deleted!', 'success');
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
  Store.displayBooks();
});