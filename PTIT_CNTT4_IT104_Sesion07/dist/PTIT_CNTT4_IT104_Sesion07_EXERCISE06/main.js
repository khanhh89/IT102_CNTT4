"use strict";
class _Account {
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
class _userAcc extends _Account {
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
            console.log("Tài khoản đã bị khóa");
        }
    }
}
class adminAcc extends _Account {
    banUserById(userId, users) {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.status = "banned";
            console.log(`Người dùng ${user.userName} đã bị cấm.`);
        }
        else {
            console.log(`Không tìm thấy người dùng với ID: ${userId}`);
        }
    }
}
const user1 = new userAcc("001", "khanh", "123456", false, "user", "active");
const user2 = new userAcc("002", "nam", "abcdef", false, "user", "active");
const users = [user1, user2];
const admin1 = new adminAcc("999", "admin", "admindeptrai", true, "admin");
user1.login();
admin1.banUserById("001", users);
user1.login();
