Library project from Odin

All of my book objects that will be created through a constructor are going to be stored in a simple array. The user will have an interface where there will input all of the information for the book, once they click ADD, all that information will run through a constructor and that newely created book be stored in the array. We will have a function that would itterate over that array to then showcase it all onto the page. 


TASKS:

1 - Create a myLibrary variable assigned to an empty array, this will be our storage of the books

2 - Create a Book() function constructor, with title, author, pages, and read or not

3 - create a function that would take the users input runs it through the constructor and stores it into the myLibrary array.

4 - Write a function that would loop over that same array, and displays each book on the page. 

5 - Add a NEW BOOK button that would opens up a form that the user submits where its attached to the function that creates new book objects using the constructor

6 - Each tab of book should have a read option where it will change from read to unread or vice versa, we will create a function that toggles that. 




OPTIONAL - create localStorage with the docs on the project page.


////////////////////////////////////
My random planning:

We will create a function that would loop over the myLibrary array

If we have 3 books in there already, when we create a new book object, it will get pushed into the array. This function will loop over the array and compare it to the library section of the html, and it will match the titles, if there is a book already showcased it will skip over, but once it gets to a book that is not in the DOM, it will create it and append to the library section. 

if title/author/pages are the same when you complete the form inside the library, then dont add the book since we already have it inside the library


add an event listener for the ADD btn on the form, that will first run the addBookToLibrary, and then the domController function that would scan the items first and if they are present in the dom, dont create another one until it gets to a new one. 

remove btn
we should add an event listener for the book container, where if e.target is the delete btn, it would scan the myLbrary array and remove it if it matches the book containers title child

We will create our eventlistener for book, inside the domController, the function for the eventhandler will be outside. Where we will do our magic


