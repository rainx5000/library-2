window.addEventListener("click", (e) => {
  // console.log(Array.from(e.target.parentElement.children))
  // console.log(e.target.classList.contains("delete-btn")
  //   );
})

const booksContainer = document.querySelector(".books-container");
const addBtnForm = document.querySelector(".add-btn");
const bookForm = document.querySelector(".book-form");
const newBookBtn = document.querySelector(".new-book-btn");



let myLibrary = [];


bookForm.addEventListener("submit", (e) => {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const isReadInput = document.querySelector("#isRead");
  e.preventDefault();
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
  domController(myLibrary);
});

newBookBtn.addEventListener("click", (e) => {
  bookForm.classList.toggle("hidden");
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
    
    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    item.isRead ? isRead.textContent = "Read" : isRead.textContent = "Not Read";
    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn")

    book.append(title, author, pages, isRead, deleteBtn);
    booksContainer.append(book);

    book.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const myLibraryTitles = myLibrary.map(el => el.title);
        const bookTitle = title.textContent
        booksContainer.children[myLibraryTitles.indexOf(bookTitle)].remove()
        myLibrary.splice(myLibraryTitles.indexOf(bookTitle), 1)

      }
    })
  })
}

domController(myLibrary)