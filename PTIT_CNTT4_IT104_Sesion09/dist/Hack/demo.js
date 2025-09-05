"use strict";
// ===== Class Audience =====
class Audience {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = ++Audience.lastId;
    }
    getDetails() {
        return `ID: ${this.id}, Tên: ${this.name}, Email: ${this.email}, SĐT: ${this.phone}`;
    }
}
Audience.lastId = 0;
// ===== Abstract Class Movie =====
class Movie {
    constructor(title, genre, ticketPrice) {
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = true;
        this.id = ++Movie.lastId;
    }
    startShow() { this.isShowing = true; }
    stopShow() { this.isShowing = false; }
}
Movie.lastId = 0;
// ===== Subclasses =====
class ActionMovie extends Movie {
    constructor(title, ticketPrice) { super(title, "Hành động", ticketPrice); }
    calculateTicketCost(quantity) { return this.ticketPrice * quantity; }
    getSpecialOffers() { return ["Miễn phí bắp rang", "Tặng poster"]; }
    getMovieInfo() { return "Phim hành động gay cấn, kỹ xảo hoành tráng"; }
}
class ComedyMovie extends Movie {
    constructor(title, ticketPrice) { super(title, "Hài", ticketPrice); }
    calculateTicketCost(quantity) {
        let total = this.ticketPrice * quantity;
        if (quantity > 4)
            total *= 0.9; // giảm 10% cho nhóm trên 4 người
        return total;
    }
    getSpecialOffers() { return ["Giảm 10% cho nhóm trên 4 người"]; }
    getMovieInfo() { return "Phim hài nhẹ nhàng, vui nhộn"; }
}
class AnimationMovie extends Movie {
    constructor(title, ticketPrice) { super(title, "Hoạt hình", ticketPrice); }
    calculateTicketCost(quantity) { return this.ticketPrice * quantity * 0.8; } // giảm cho trẻ em
    getSpecialOffers() { return ["Giảm giá cho trẻ em dưới 12 tuổi"]; }
    getMovieInfo() { return "Phim hoạt hình với hình ảnh sống động"; }
}
// ===== Class TicketBooking =====
class TicketBooking {
    constructor(audience, movie, quantity) {
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.bookingId = ++TicketBooking.lastId;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails() {
        return `Mã đặt vé: ${this.bookingId}, Khán giả: ${this.audience.name}, Phim: ${this.movie.title}, SL: ${this.quantity}, Tổng tiền: ${this.totalPrice}`;
    }
}
TicketBooking.lastId = 0;
// ===== Class Cinema =====
class Cinema {
    constructor() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
    }
    addMovie(movie) { this.movies.push(movie); }
    addAudience(name, email, phone) {
        const audience = new Audience(name, email, phone);
        this.audiences.push(audience);
        return audience;
    }
    bookTickets(audienceId, movieId, quantity) {
        const audience = this.audiences.find(a => a.id === audienceId);
        const movie = this.movies.find(m => m.id === movieId && m.isShowing);
        if (!audience || !movie)
            return null;
        const booking = new TicketBooking(audience, movie, quantity);
        this.bookings.push(booking);
        return booking;
    }
    cancelMovie(movieId) {
        const movie = this.movies.find(m => m.id === movieId);
        if (movie)
            movie.stopShow();
    }
    listShowingMovies() { return this.movies.filter(m => m.isShowing); }
    listAudienceBookings(audienceId) { return this.bookings.filter(b => b.audience.id === audienceId); }
    calculateTotalRevenue() { return this.bookings.reduce((sum, b) => sum + b.totalPrice, 0); }
    getMovieGenreCount() {
        return this.movies.reduce((count, m) => {
            count[m.genre] = (count[m.genre] || 0) + 1;
            return count;
        }, {});
    }
    getMovieSpecialOffers(movieId) {
        const movie = this.movies.find(m => m.id === movieId);
        return movie ? movie.getSpecialOffers() : [];
    }
}
// ===== Demo Menu =====
const cinema = new Cinema();
// Seed dữ liệu
cinema.addMovie(new ActionMovie("Fast & Furious", 100));
cinema.addMovie(new ComedyMovie("Mr. Bean", 80));
cinema.addMovie(new AnimationMovie("Frozen", 70));
let choice;
do {
    choice = prompt("=== Quản lý đặt vé xem phim ===\n" +
        "1. Thêm khán giả\n" +
        "2. Thêm phim mới\n" +
        "3. Đặt vé\n" +
        "4. Ngừng chiếu phim\n" +
        "5. Hiển thị phim đang chiếu\n" +
        "6. Hiển thị đặt vé của khán giả\n" +
        "7. Tính tổng doanh thu\n" +
        "8. Đếm số lượng phim theo thể loại\n" +
        "9. Tìm phim theo ID\n" +
        "10. Hiển thị ưu đãi của phim\n" +
        "0. Thoát\n" +
        "Chọn chức năng: ");
    switch (choice) {
        case "1": {
            let name = prompt("Nhập tên khán giả:") || "";
            let email = prompt("Nhập email:") || "";
            let phone = prompt("Nhập số điện thoại:") || "";
            let newAud = cinema.addAudience(name, email, phone);
            alert("Đã thêm: " + newAud.getDetails());
            break;
        }
        case "2": {
            let type = prompt("Chọn loại phim: 1.Hành động 2.Hài 3.Hoạt hình") || "";
            let title = prompt("Nhập tên phim:") || "";
            let price = parseFloat(prompt("Nhập giá vé:") || "0");
            if (type === "1")
                cinema.addMovie(new ActionMovie(title, price));
            else if (type === "2")
                cinema.addMovie(new ComedyMovie(title, price));
            else if (type === "3")
                cinema.addMovie(new AnimationMovie(title, price));
            alert("Đã thêm phim mới!");
            break;
        }
        case "3": {
            let audId = parseInt(prompt("Nhập ID khán giả:") || "0");
            let movId = parseInt(prompt("Nhập ID phim:") || "0");
            let qty = parseInt(prompt("Nhập số lượng vé:") || "0");
            let booking = cinema.bookTickets(audId, movId, qty);
            alert(booking ? booking.getDetails() : "Không đặt được vé!");
            break;
        }
        case "4": {
            let stopId = parseInt(prompt("Nhập ID phim cần ngừng chiếu:") || "0");
            cinema.cancelMovie(stopId);
            alert("Đã ngừng chiếu phim!");
            break;
        }
        case "5": {
            let showing = cinema.listShowingMovies().map(m => `${m.id} - ${m.title}`).join("\n");
            alert("Phim đang chiếu:\n" + showing);
            break;
        }
        case "6": {
            let audBkId = parseInt(prompt("Nhập ID khán giả:") || "0");
            let bookings = cinema.listAudienceBookings(audBkId).map(b => b.getDetails()).join("\n");
            alert(bookings || "Chưa có đặt vé");
            break;
        }
        case "7": {
            alert("Tổng doanh thu: " + cinema.calculateTotalRevenue());
            break;
        }
        case "8": {
            let counts = cinema.getMovieGenreCount();
            alert("Số lượng phim theo thể loại: " + JSON.stringify(counts));
            break;
        }
        case "9": {
            let findId = parseInt(prompt("Nhập ID phim:") || "0");
            let found = cinema.movies.find(m => m.id === findId);
            alert(found ? found.getMovieInfo() : "Không tìm thấy!");
            break;
        }
        case "10": {
            let offId = parseInt(prompt("Nhập ID phim:") || "0");
            let offers = cinema.getMovieSpecialOffers(offId).join(", ");
            alert("Ưu đãi: " + offers);
            break;
        }
        case "0":
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== "0");
