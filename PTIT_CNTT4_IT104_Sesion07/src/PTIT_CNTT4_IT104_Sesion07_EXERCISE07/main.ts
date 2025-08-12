namespace B07 {
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
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
      }
    }

    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
      }
    }

    showHistory(): void {
      console.log(`Lịch sử giao dịch:`);
      this.history.forEach(entry => console.log(entry));
    }
  }
  class SavingAccount extends Account {
    public interestRate: number;
    constructor(accountNumber: string, balance: number, history: string[], status: string, interestRate: number) {
      super(accountNumber, balance, history, status);
      this.interestRate = interestRate;
    }
    override withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
      } else if (this.balance > 0) {
        this.history.push(`Rút tối đa: -${this.balance} | Số dư: 0`);
        this.balance = 0;
      }
    }
  }

  let acc = new SavingAccount("123", 1000, [], "Active", 0.05);
  acc.deposit(500);       
  acc.withdraw(300);       
  acc.withdraw(1500);  
  acc.deposit(200);      
  acc.withdraw(300);      
  acc.showHistory();
}
