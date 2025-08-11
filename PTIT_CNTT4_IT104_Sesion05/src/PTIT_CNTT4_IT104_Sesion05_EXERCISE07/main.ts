namespace a {
  class _Book {
    private id: number;
    public title: string;
    public author: string;

    constructor(id: number, title: string, author: string) {
      this.id = id;
      this.title = title;
      this.author = author;
    }

    getId(): number {
      return this.id;
    }
    updateInfo(newTitle: string, newAuthor: string): void {
      this.title = newTitle;
      this.author = newAuthor;
    }

    printInfo(): void {
      console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`);
    }
  }
  class _Library {
    private books: _Book[] = [];
    addBook(book: _Book): void {
      this.books.push(book);
    }
    updateBookById(id: number, newTitle: string, newAuthor: string): void {
      const book = this.books.find(b => b.getId() === id);
      if (book) {
        book.updateInfo(newTitle, newAuthor);
        console.log(`Sách ${id} đã được cập nhật`);
      } else {
        console.log(`Sách ${id} cập nhật lỗi`);
      }
    }
    printAllBooks(): void {
      console.log("Danh sách sách:");
      this.books.forEach(book => book.printInfo());
    }
  }
  const library = new _Library();
  const book1 = new _Book(1, "Clean Code", "Robert C. Martin");
  const book2 = new _Book(2, "The Pragmatic Programmer", "Andrew Hunt");
  library.addBook(book1);
  library.addBook(book2);
  library.printAllBooks()
  library.updateBookById(1, "Clean Code (Updated)", "Uncle Bob");
  library.printAllBooks();
}