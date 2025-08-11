var a;
(function (a) {
    class _Book {
        constructor(id, title, author, year) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.year = year;
        }
        getId() {
            return this.id;
        }
        getTitle() {
            return this.title;
        }
        getAuthor() {
            return this.author;
        }
        getYear() {
            return this.year;
        }
        setTitle(newTitle) {
            this.title = newTitle;
        }
        setAuthor(newAuthor) {
            this.author = newAuthor;
        }
        setYear(newYear) {
            this.year = newYear;
        }
        updateInfo(newTitle, newAuthor, newYear) {
            this.setTitle(newTitle);
            this.setAuthor(newAuthor);
            this.setYear(newYear);
        }
        printInfo() {
            console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
        }
    }
    class _Library {
        constructor() {
            this.books = [];
        }
        addBook(book) {
            this.books.push(book);
        }
        deleteBookById(id) {
            const index = this.books.findIndex(book => book.getId() === id);
            if (index !== -1) {
                this.books.splice(index, 1);
                console.log(` Đã xóa sách có ID ${id}`);
            }
            else {
                console.log(` Không tìm thấy sách có ID ${id}`);
            }
        }
        updateBookById(id, newTitle, newAuthor, newYear) {
            const book = this.books.find(book => book.getId() === id);
            if (book) {
                book.updateInfo(newTitle, newAuthor, newYear);
                console.log(`Đã cập nhật sách có ID ${id}`);
            }
            else {
                console.log(`Không tìm thấy sách có ID ${id}`);
            }
        }
        printAllBooks() {
            console.log("Danh sách sách:");
            this.books.forEach(book => book.printInfo());
        }
    }
    const library = new _Library();
    const book1 = new _Book(1, "Lập trình C", "Robert C. Martin", 2008);
    const book2 = new _Book(2, "Lập trình Java", "JV", 1999);
    const book3 = new _Book(3, "Lập trình Python", "PY", 2004);
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.updateBookById(2, "Lập trình FE", "FE", 2020);
    library.deleteBookById(1);
    library.printAllBooks();
})(a || (a = {}));
