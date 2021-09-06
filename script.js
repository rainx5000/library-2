const booksContainer = document.querySelector(".books-container");
const addBtnForm = document.querySelector(".add-btn");
const bookForm = document.querySelector(".book-form");
const newBookBtn = document.querySelector(".new-book-btn");
const bookFormContainer = document.querySelector(".form-container");

let myLibrary = [];

bookForm.addEventListener("submit", (e) => {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const isReadInput = document.querySelector("#isRead");
  e.preventDefault();
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
  domController(myLibrary);

  bookForm.classList.toggle("hidden");
  bookFormContainer.classList.toggle("hidden")
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  isReadInput.checked = false;
});

newBookBtn.addEventListener("click", (e) => {
  bookForm.classList.toggle("hidden");
  bookFormContainer.classList.toggle("hidden")
})

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  const domBooksArray = Array.from(booksContainer.children);
  const domBooksTitles = domBooksArray.map(el => el.firstChild.textContent);
  if (domBooksTitles.includes(title)) return;
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
    
    title.textContent = `" ${item.title} "`;
    author.textContent = `- ${item.author}`;
    pages.textContent = `${item.pages} pages`;
    // item.isRead ? isRead.textContent = "Read" : isRead.textContent = "Not Read";
    if (item.isRead) {
      isRead.textContent = "Read";
      isRead.classList.add("read");
    } else {
      isRead.textContent = "Not Read";
    }
    deleteBtn.textContent = "Delete";

    book.classList.add("book-container");
    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    isRead.classList.add("isReadBtn");
    deleteBtn.classList.add("delete-btn");

    book.append(title, author, pages, isRead, deleteBtn);
    booksContainer.append(book);

    book.addEventListener("click", (e) => {
    const myLibraryTitles = myLibrary.map(el => el.title);
    const bookTitle = title.textContent
      if (e.target.classList.contains("delete-btn")) {
        booksContainer.children[myLibraryTitles.indexOf(bookTitle)].remove()
        myLibrary.splice(myLibraryTitles.indexOf(bookTitle), 1)
      } 
      if (e.target.classList.contains("isReadBtn")) {
        if (item.isRead) {
          e.target.textContent = "Not Read"
          e.target.classList.toggle("read");
          myLibrary[myLibraryTitles.indexOf(bookTitle)].isRead = false;
        } else {
          e.target.textContent = "Read"
          e.target.classList.toggle("read");
          myLibrary[myLibraryTitles.indexOf(bookTitle)].isRead = true;
        }
        
      }
    })
  })
}
domController(myLibrary)