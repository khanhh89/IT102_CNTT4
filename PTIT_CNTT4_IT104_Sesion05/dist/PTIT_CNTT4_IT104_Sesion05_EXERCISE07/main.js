var a;
(function (a) {
    class _Book {
        constructor(id, title, author) {
            this.id = id;
            this.title = title;
            this.author = author;
        }
        getId() {
            return this.id;
        }
        updateInfo(newTitle, newAuthor) {
            this.title = newTitle;
            this.author = newAuthor;
        }
        printInfo() {
            console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`);
        }
    }
    class _Library {
        constructor() {
            this.books = [];
        }
        addBook(book) {
            this.books.push(book);
        }
        updateBookById(id, newTitle, newAuthor) {
            const book = this.books.find(b => b.getId() === id);
            if (book) {
                book.updateInfo(newTitle, newAuthor);
                console.log(`Sách ${id} đã được cập nhật`);
            }
            else {
                console.log(`Sách ${id} cập nhật lỗi`);
            }
        }
        printAllBooks() {
            console.log("Danh sách sách:");
            this.books.forEach(book => book.printInfo());
        }
    }
    const library = new _Library();
    const book1 = new _Book(1, "Clean Code", "Robert C. Martin");
    const book2 = new _Book(2, "The Pragmatic Programmer", "Andrew Hunt");
    library.addBook(book1);
    library.addBook(book2);
    library.printAllBooks();
    library.updateBookById(1, "Clean Code (Updated)", "Uncle Bob");
    library.printAllBooks();
})(a || (a = {}));
