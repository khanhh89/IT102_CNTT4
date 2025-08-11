class $Book {
    private $id: number;
    private $title: string;
    private $author: string;
    private $stock: number;
    private $status: string;
    constructor($id: number, $title: string, $author: string, $stock: number, $status: string) {
        this.$id = $id;
        this.$title = $title;
        this.$author = $author;
        this.$stock = $stock;
        this.$status = $status;
    }
    $getId(): number {
        return this.$id;
    }
    $getInfo(): string {
        return `ID: ${this.$id}, Title: ${this.$title}, Author: ${this.$author}, Stock: ${this.$stock}, Status: ${this.$status}`;
    }
    $getStock(): number {
        return this.$stock;
    }
    $setStock($stock: number) {
        this.$stock = $stock;
    }
    $getStatus(): string {
        return this.$status;
    }
    $setStatus($status: string) {
        this.$status = $status;
    }
}

class $LendedBook {
    $memberId: number;
    $bookId: number;
    $dueDate: Date;
    constructor($memberId: number, $bookId: number, $dueDate: Date) {
        this.$memberId = $memberId;
        this.$bookId = $bookId;
        this.$dueDate = $dueDate;
    }
    $getInfo(): string {
        return `ID: ${this.$memberId}, Book ID: ${this.$bookId}, Due date: ${this.$dueDate.toLocaleDateString()}`;
    }
}

class $Member {
    private $id: number;
    private $name: string;
    private $contact: string;
    private $lendedBooks: $LendedBook[];
    private $status: string;
    constructor($id: number, $name: string, $contact: string, $status: string = "active") {
        this.$id = $id;
        this.$name = $name;
        this.$contact = $contact;
        this.$lendedBooks = [];
        this.$status = $status;
    }
    $getId(): number {
        return this.$id;
    }
    $getInfo(): string {
        return `ID: ${this.$id}, Name: ${this.$name}, Contact: ${this.$contact}, Status: ${this.$status}, Lended books: ${this.$lendedBooks.length}`;
    }
    $addLendedBook($lendedBook: $LendedBook) {
        this.$lendedBooks.push($lendedBook);
    }
    $getLendedBooks(): $LendedBook[] {
        return this.$lendedBooks;
    }
    $getStatus(): string {
        return this.$status;
    }
    $setStatus($status: string) {
        this.$status = $status;
    }
}

class $Library {
    private $books: $Book[] = [];
    private $members: $Member[] = [];
    $addBook($book: $Book): void {
        this.$books.push($book);
        console.log(`Đã thêm sách: ${$book.$getInfo()}`);
    }
    $showBooks(): void {
        console.log("Danh sách sách:");
        this.$books.forEach($book => console.log($book.$getInfo()));
    }
    $registerMember($id: number, $name: string, $contact: string): void {
        const $member = new $Member($id, $name, $contact);
        this.$members.push($member);
        console.log(`Đã đăng ký thành viên: ${$member.$getInfo()}`);
    }
    $blockMember($memberId: number, $status: string): void {
        const $member = this.$members.find($m => $m.$getId() === $memberId);
        if ($member) {
            $member.$setStatus($status);
            console.log(`Đã thay đổi trạng thái ID ${$memberId} thành: ${$status}`);
        } else {
            console.log(`Không tìm thấy thành viên với ID ${$memberId}`);
        }
    }
    $showMembers(): void {
        console.log("Danh sách thành viên:");
        this.$members.forEach($member => console.log($member.$getInfo()));
    }
}
const $library = new $Library();
const $book1 = new $Book(3, "Code 1", "", 50, "available");
const $book2 = new $Book(2, "Học OOP cơ bản", "Trần Thị B", 5, "available");
$library.$addBook($book1);
$library.$addBook($book2);
$library.$showBooks();
$library.$registerMember(1, "Nguyen Van A", "A@gmail.com");
$library.$registerMember(2, "Tran Thi B", "b@gmail.com");
$library.$blockMember(1, "blocked");
$library.$showMembers();