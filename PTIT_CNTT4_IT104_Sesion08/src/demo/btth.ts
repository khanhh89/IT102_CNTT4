//B1: Tạo lớp Book
class Book{
    id:string
    title:string
    author:string
    year:number
    constructor(id:string, title:string,author:string, year:number){
        this.id = id
        this.title = title
        this.author = author
        this.year = year
    }

}
//B2: Tạo lớp thư viện
class Library<T extends{id:number, name:string}>{
    //Tạo mảng chứa các quyển sách trong thư viện
    books:T[]=[]
    //Định nghĩa các phương thức:
    //1.Thêm sách vào thư viện
    addBook(book:T):void{
        this.books.push(book)
    }
    //2.Tìm sách theo ID, nếu có trả về sách, không có trả về undefined
    getBookById(id:number):T|undefined{
        return this.books.find(item=>item.id===id)
    }
    //3.Xóa sách theo id
    removeBookId(id:number):void{
        let index = this.books.findIndex(item=>item.id==id)
        if(index==-1){
            console.log("Không có sách trong thư viện")
        }else{
            let comfirmDelete = confirm(`Ban có muốn xóa sách: ${this.books[index].name} hay không??`)
            if(comfirmDelete) this.books.splice(index, 1)
        }
    }
    //4.Cập nhật thông tin sách
    updateBook(id:number, new_book:T):void{
        let bookID = this.books.findIndex(item=>item.id==id)
        if(!bookID) {
            console.log("Thư viện đéo có gì")
        }else{
            this.books[bookID] = new_book
            console.log("TÌm thấy")
        }
    }
    //6. Tìm theo tên
    
}
//B3:Viết các hàm triển khai 
