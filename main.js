const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        result = `${this.title} by ${this.author}, ${this.pages} pages, `;
        if (this.read) {
            result += "read";
        } else {
            result += "not read yet";
        }
        return result;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function removeBook(event) {
    console.log(event);
    const card = event.target.closest('.card');
    const index = card.dataset.index;
    library.splice(index, 1);
    card.remove();
    document.querySelectorAll('.card').forEach((card, index) => {
        card.dataset.index = index;
    });
}

function editBook(event) {
    const card = event.target.closest('.card');
    const index = card.dataset.index;
    library[index].read = !library[index].read;
    const readStatus = card.querySelector('.card-body span');
    readStatus.textContent = library[index].read ? "Yes" : "No";
}

function createButton(iconPath) {
    const button = document.createElement('button');
    button.classList.add('button-icon');
    button.innerHTML = `
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="${iconPath}" />
        </svg>
    `;
    return button;
}

function showBooks() {
    let i = 0;
    library.forEach(book => {
        const main = document.querySelector('main');
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = i++;

        const editButton = createButton('m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10');
        editButton.addEventListener('click', editBook);

        const removeButton = createButton('m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0');
        removeButton.addEventListener('click', removeBook);

        card.innerHTML += 
        `<div class="card-header">
            <h3>${book.title}</h3>
            <div class="icons">
            </div>
        </div>
        <div class="card-body">
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: <span>${book.read ? "Yes" : "No"}</span></p>
        </div>`;

        card.querySelector('.icons').appendChild(editButton);
        card.querySelector('.icons').appendChild(removeButton);
        main.appendChild(card);
    });
}

function addBookToDisplay(book, index) {
    const main = document.querySelector('main');
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    const editButton = createButton('m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10');
    editButton.addEventListener('click', editBook);

    const removeButton = createButton('m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0');
    removeButton.addEventListener('click', removeBook);

    card.innerHTML += 
    `<div class="card-header">
        <h3>${book.title}</h3>
        <div class="icons">
        </div>
    </div>
    <div class="card-body">
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: <span>${book.read ? "Yes" : "No"}</span></p>
    </div>`;

    card.querySelector('.icons').appendChild(editButton);
    card.querySelector('.icons').appendChild(removeButton);
    main.appendChild(card);
}

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const addBookButton = document.querySelector('#add-book');
    const addBookForm = document.querySelector('#add-book-form');
    const backdrop = document.querySelector('#backdrop');
    const close = document.querySelector('#close');
    const add = document.querySelector('#add');

    addBookButton.addEventListener('click', () => {
        addBookForm.show();
        backdrop.style.display = 'block';
    });

    close.addEventListener('click', () => {
        addBookForm.close();
        backdrop.style.display = 'none';
    });

    add.addEventListener('click', () => {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').checked;

        const book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        addBookForm.close();
        backdrop.style.display = 'none';
        addBookToDisplay(book, library.length - 1);
    });
});