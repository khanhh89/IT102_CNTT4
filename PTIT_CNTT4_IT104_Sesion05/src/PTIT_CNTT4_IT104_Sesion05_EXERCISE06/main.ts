class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public getInfo(): string {
    return `"${this.title}" by ${this.author}`;
  }
}

class Library {
  private books: Book[] = [];
  public addBook(book: Book): void {
    this.books.push(book);
  }
  public listBooks(): void {
    console.log("Library Book List:");
    this.books.forEach((book, index) => {
      console.log('====================================');
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }
}
const book1 = new Book("Doreamon", "Fujiko F. Fujio");
const book2 = new Book("Doreamon2", "Fujiko F. Fujio");
const book3 = new Book("Doreamo3", "Fujiko F. Fujio");
const book4 = new Book("Doreamon4", "Fujiko F. Fujio");
const book5 = new Book("Doreamo5", "Fujiko F. Fujio");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.listBooks();
