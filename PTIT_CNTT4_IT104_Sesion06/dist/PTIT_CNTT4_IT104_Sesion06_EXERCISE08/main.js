class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock; // Fixed duplicate assignment
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`;
    }
    getStock() {
        return this.stock;
    }
    setStock(stock) {
        this.stock = stock;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getInfo() {
        return `ID: ${this.memberId}, Book ID: ${this.bookId}, Due date: ${this.dueDate.toLocaleDateString()}`;
    }
}
class Member {
    constructor(id, name, contact, status = "active") {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Contact: ${this.contact}, Status: ${this.status}, Lended books: ${this.lendedBooks.length}`;
    }
    addLendedBook(lendedBook) {
        this.lendedBooks.push(lendedBook);
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getInfo()}`);
    }
    showBooks() {
        console.log("Danh sách sách:");
        this.books.forEach(book => console.log(book.getInfo()));
    }
}
const library = new Library();
const book1 = new Book(3, "Code 1", "...", 50, "available");
const book2 = new Book(2, "Học 2", "....", 5, "available");
library.addBook(book1);
library.addBook(book2);
library.showBooks();
