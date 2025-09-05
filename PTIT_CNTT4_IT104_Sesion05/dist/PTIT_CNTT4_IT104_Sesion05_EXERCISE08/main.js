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
        findBooksByTitle(title) {
            const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
            if (foundBooks.length > 0) {
                console.log(`Các sách tìm thấy với từ khóa "${title}":`);
                foundBooks.forEach(book => book.printInfo());
            }
            else {
                console.log(`Không tìm thấy sách nào với từ khóa "${title}"`);
            }
        }
        printAllBooks() {
            console.log("Danh sách sách:");
            this.books.forEach(book => book.printInfo());
        }
    }
    const library = new _Library();
    const book1 = new _Book(1, "Lập trình C", "Robert C. Martin");
    const book2 = new _Book(2, "Lập trình Java", "J Hunt");
    const book3 = new _Book(3, "Lập trình FE", "FE");
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.findBooksByTitle("FE");
    library.printAllBooks();
})(a || (a = {}));
