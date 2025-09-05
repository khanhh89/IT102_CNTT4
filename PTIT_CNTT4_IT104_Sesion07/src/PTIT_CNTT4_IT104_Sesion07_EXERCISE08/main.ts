namespace B08 {
  class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, balance: number, history: string[], status: string) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.history = history;
      this.status = status;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        this.history.push(`Nạp: +${amount} - Số dư: ${this.balance}`);
      }
    }

    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Rút: -${amount} - Số dư: ${this.balance}`);
      }
    }

    showHistory(): void {
      console.log(`Lịch sử giao dịch:`);
      this.history.forEach((entry) => console.log(entry));
    }
  }

  class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: string, balance: number, history: string[], status: string, overdraftLimit: number) {
      super(accountNumber, balance, history, status);
      this.overdraftLimit = overdraftLimit;
    }

    override withdraw(amount: number): void {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        this.history.push(`Rút: -${amount} - Số dư: ${this.balance}`);
      } else {
        this.history.push(`Rút thất bại`);
      }
    }
  }
  let acc = new CheckingAccount("123", 1000, [], "Active", 500);
  acc.deposit(500);
  acc.withdraw(1200);
  acc.withdraw(500); 
  acc.showHistory();
}
