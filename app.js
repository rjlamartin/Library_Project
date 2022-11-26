class Book{
    id;
    title;
    author;
    hasRead;

    constructor(title, author, read){
        this.title = title;
        this.author = author;
        this.hasRead = read;
    }
}

class Library{
    bookCount;
    books;

    constructor(count = 1, booksArray = []){
        this.bookCount = count;
        this.books = booksArray;
    }

    markRead(checkbox, id){
        //loop thru the books
        this.books.forEach((book)=>{
            if (book.id == id){
                book.hasRead = true;
                checkbox.disabled = true;
            }
        })
    }

    addBook(){
        //Selection Statements
        const inputBookTitleElement = document.querySelector("#input-bookTitle");
        const inputBookAuthorElement = document.querySelector("#input-bookAuthor");
        const inputBookHasReadElement = document.querySelector("#input-bookHasRead");
        const tableBodyElement = document.querySelector("#booksTable")
        
        //Create an instance of the book class(instantiation)
        const book = new Book(inputBookTitleElement.value, 
            inputBookAuthorElement.value, inputBookHasReadElement.checked);
        book.id = this.bookCount - 1;
        this.books.push(book);
        
        //Create Elements
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        tdTitle.textContent = book.title;
        const tdAuthor = document.createElement("td");
        tdAuthor.textContent = book.author;
        const inputHasRead = document.createElement("input");
        inputHasRead.type = "checkbox";
        inputHasRead.checked = book.hasRead;
        inputHasRead.disabled = true;

        //Appending Elements
        tr.append(tdTitle);
        tr.append(tdAuthor);
        tr.append(inputHasRead);
        tableBodyElement.append(tr);


        //Increment book count(add 1)
        this.bookCount++;

        //Reset input values
        inputBookTitleElement.value = "";
        inputBookAuthorElement.value = "";
        inputBookHasReadElement.checked = false;
    }
}

const bookLibrary = 
new Library(1, [new Book("Name of the Wind", "Patrick Rothfuss", true)]);

//const addBookButton = document.querySelector("#newBookForm > button");
const newBookForm = document.querySelector("#newBookForm");
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookLibrary.addBook();
});
