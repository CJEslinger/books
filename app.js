myLibrary = [];
const booksContainer = document.querySelector('.library');
const createBookContainer = function () {    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');
    booksContainer.appendChild(bookContainer);
}

function addBookElements() {

}

const bookButton = document.querySelector('#create-button');
bookButton.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, didRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.didRead = didRead;
}


function addBookToLibrary() {
    let newBook = new Book(prompt('Title'), prompt('Author'), prompt('Pages'), prompt('Did Read'));
    myLibrary.push(newBook);
    console.log(myLibrary);
    createBook();
}


const book1 = new Book('Test', 'CJ', 205, true);
const book2 = new Book('Test', 'CJ', 205, true);
const book3 = new Book('Test', 'CJ', 205, true);
const book4 = new Book('Test', 'CJ', 205, true);

function createBook() {
    createBookContainer();
    addContainerElements();
}

//function addContainerElements();