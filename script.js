function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const myLibrary = [];
const libraryContainer = document.querySelector("#library");
const bookForm = document.querySelector("#bookForm");
const newBookBtn = document.querySelector("#newBookBtn");


loadLibrary();
renderLibrary();

function loadLibrary() {
  const storedLibrary = localStorage.getItem("library");

  if (storedLibrary) {
    const books = JSON.parse(storedLibrary);
    books.forEach((book) => {
      const newBook = new Book(book.title, book.author, book.pages, book.read);
      newBook.id = book.id;
      myLibrary.push(newBook);
    });
  }
}

function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  saveLibrary();
  renderLibrary();
}

function renderLibrary() {
  libraryContainer.innerHTML = "";
  myLibrary.forEach(function (book) {
    const card = createBookCard(book);
    libraryContainer.appendChild(card);
  });
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.dataset.id = book.id;

  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("card-btns");

  const toggleBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  toggleBtn.classList.add("toggle-btn");
  removeBtn.classList.add("remove-btn");

  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  read.textContent = book.read ? "✓ Read" : "○ Not Read";
  read.className = `read-status ${book.read ? "read" : "not-read"}`;

  toggleBtn.textContent = "Toggle Status";
  removeBtn.textContent = "Delete";

  btnContainer.append(toggleBtn, removeBtn);
  bookCard.append(title, author, pages, read, btnContainer);
  
  return bookCard;
}

libraryContainer.addEventListener("click", function (event) {
  const card = event.target.closest(".book-card");
  if (!card) return;
  const id = card.dataset.id;

  if (event.target.classList.contains("remove-btn")) {
    const index = myLibrary.findIndex(function (book) {
      return book.id === id;
    });
    if (index !== -1) {
      myLibrary.splice(index, 1);
      saveLibrary();
      renderLibrary();
    }
  }

  if (event.target.classList.contains("toggle-btn")) {
    const book = myLibrary.find(function(book) {
        return book.id === id;
    });
    book.toggleRead();
    saveLibrary();
    renderLibrary();
}
});

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked,
  );
  bookForm.reset();
  bookForm.classList.add("hidden");
});

newBookBtn.addEventListener("click", function () {
  bookForm.classList.toggle("hidden");
});

const isFirstTime = localStorage.getItem("library") === null;

if (isFirstTime) {
  addBookToLibrary("Piranesi", "Susanna Clarke", 272, true);
  addBookToLibrary("Anxious People", "Fredrik Backman", 416, false);
  addBookToLibrary("Sapiens", "Yuval Noah Harari", 512, true);
  addBookToLibrary("The Lost Bookshop", "Evie Woods", 448, false);
}

