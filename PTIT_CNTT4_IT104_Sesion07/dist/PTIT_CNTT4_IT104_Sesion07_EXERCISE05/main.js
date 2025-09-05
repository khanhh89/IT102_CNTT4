"use strict";
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() { }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất!!");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Bạn đã bị ban");
        }
    }
}
let studen = new userAcc("01", "khanh", "12345", false, "users", "active");
studen.login();
studen.logout();
let studens = new userAcc("01", "khanh", "12345", false, "users", "banned");
studens.login();
studens.logout();
