class Account {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;
  constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = isLogin;
    this.role = role;
  }

  public login(): void {}

  public logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất!!");
      this.isLogin = false;
    }
  }
}

class userAcc extends Account {
  public status: "active" | "banned";
  constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: "active" | "banned") {
    super(id, userName, password, isLogin, role);
    this.status = status;
  }
  public override login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else {
      console.log("Bạn đã bị ban");
    }
  }
}

let studen = new userAcc("01", "khanh", "12345", false, "users", "active")
studen.login()
studen.logout()
let studens = new userAcc("01", "khanh", "12345", false, "users", "banned")
studens.login()
studens.logout()