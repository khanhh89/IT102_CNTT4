namespace a {
  class _Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;
    constructor(id: number, title: string, author: string, year: number) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
    }
    getId(): number {
      return this.id;
    }
    getTitle(): string {
      return this.title;
    }
    getAuthor(): string {
      return this.author;
    }
    getYear(): number {
      return this.year;
    }
    setTitle(newTitle: string): void {
      this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
      this.author = newAuthor;
    }
    setYear(newYear: number): void {
      this.year = newYear;
    }
    updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
      this.setTitle(newTitle);
      this.setAuthor(newAuthor);
      this.setYear(newYear);
    }
    printInfo(): void {
      console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
  }

  class _Library {
    private books: _Book[] = [];
    addBook(book: _Book): void {
      this.books.push(book);
    }
    deleteBookById(id: number): void {
      const index = this.books.findIndex(book => book.getId() === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(` Đã xóa sách có ID ${id}`);
      } else {
        console.log(` Không tìm thấy sách có ID ${id}`);
      }
    }

    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
      const book = this.books.find(book => book.getId() === id);
      if (book) {
        book.updateInfo(newTitle, newAuthor, newYear);
        console.log(`Đã cập nhật sách có ID ${id}`);
      } else {
        console.log(`Không tìm thấy sách có ID ${id}`);
      }
    }

    printAllBooks(): void {
      console.log("Danh sách sách:");
      this.books.forEach(book => book.printInfo());
    }
  }
  const library = new _Library();
  const book1 = new _Book(1, "Clean Code", "Robert C. Martin", 2008);
  const book2 = new _Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1999);
  const book3 = new _Book(3, "Code Complete", "Steve McConnell", 2004);
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.updateBookById(2, "The Pragmatic Programmer", "Andy Hunt", 2020);
  library.deleteBookById(1);
  library.printAllBooks();
}
