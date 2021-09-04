const booksContainer = document.querySelector(".books-container");
const addBtnForm = document.querySelector(".add-btn");
const bookForm = document.querySelector(".book-form");


let myLibrary = [
  {
    title: "harry potta",
    author: "Usman Tasayev",
    pages: 420,
    isRead: true
  }
];

bookForm.addEventListener("submit", (e) => {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const isReadInput = document.querySelector("#isRead");
  e.preventDefault();
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
  domController(myLibrary);
});





function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}


function domController (libraryArray) {
  const domBooksArray = Array.from(booksContainer.children);
  const domBooksTitles = domBooksArray.map(el => el.firstChild.textContent);
  libraryArray.forEach(item => {
    if (domBooksTitles.includes(item.title)) return;
    const book = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const isRead = document.createElement("button");
    const deleteBtn = document.createElement("button");
    
    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    item.isRead ? isRead.textContent = "Read" : isRead.textContent = "Not Read";
    deleteBtn.textContent = "Delete";

    book.append(title, author, pages, isRead, deleteBtn);
    booksContainer.append(book);
  })
}

domController(myLibrary)