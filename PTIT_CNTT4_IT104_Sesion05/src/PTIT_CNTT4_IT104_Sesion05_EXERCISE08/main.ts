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
      this.books.push(book)
    }
    findBooksByTitle(title: string): void {
      const foundBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );

      if (foundBooks.length > 0) {
        console.log(`Các sách tìm thấy với từ khóa "${title}":`)
        foundBooks.forEach(book => book.printInfo())
      } else {
        console.log(`Không tìm thấy sách nào với từ khóa "${title}"`);
      }
    }

    printAllBooks(): void {
      console.log("Danh sách sách:")
      this.books.forEach(book => book.printInfo())
    }
  }
  const library = new _Library();
  const book1 = new _Book(1, "Lập trình C", "Robert C. Martin");
  const book2 = new _Book(2, "Lập trình Java", "J Hunt");
  const book3 = new _Book(3, "Lập trình FE", "FE");
  library.addBook(book1)
  library.addBook(book2)
  library.addBook(book3)
  library.findBooksByTitle("FE")
  library.printAllBooks();
}
