"use strict";
//B1: Tạo lớp Book
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//B2: Tạo lớp thư viện
class Library {
    constructor() {
        //Tạo mảng chứa các quyển sách trong thư viện
        this.books = [];
        //6. Tìm theo tên
    }
    //Định nghĩa các phương thức:
    //1.Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    //2.Tìm sách theo ID, nếu có trả về sách, không có trả về undefined
    getBookById(id) {
        return this.books.find(item => item.id === id);
    }
    //3.Xóa sách theo id
    removeBookId(id) {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log("Không có sách trong thư viện");
        }
        else {
            let comfirmDelete = confirm(`Ban có muốn xóa sách: ${this.books[index].name} hay không??`);
            if (comfirmDelete)
                this.books.splice(index, 1);
        }
    }
    //4.Cập nhật thông tin sách
    updateBook(id, new_book) {
        let bookID = this.books.findIndex(item => item.id == id);
        if (!bookID) {
            console.log("Thư viện đéo có gì");
        }
        else {
            this.books[bookID] = new_book;
            console.log("TÌm thấy");
        }
    }
}
//B3:Viết các hàm triển khai 
