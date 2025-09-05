"use strict";
var B08;
(function (B08) {
    class Account {
        constructor(accountNumber, balance, history, status) {
            this.accountNumber = accountNumber;
            this.balance = balance;
            this.history = history;
            this.status = status;
        }
        deposit(amount) {
            if (amount > 0) {
                this.balance += amount;
                this.history.push(`Nạp: +${amount} - Số dư: ${this.balance}`);
            }
        }
        withdraw(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                this.history.push(`Rút: -${amount} - Số dư: ${this.balance}`);
            }
        }
        showHistory() {
            console.log(`Lịch sử giao dịch:`);
            this.history.forEach((entry) => console.log(entry));
        }
    }
    class CheckingAccount extends Account {
        constructor(accountNumber, balance, history, status, overdraftLimit) {
            super(accountNumber, balance, history, status);
            this.overdraftLimit = overdraftLimit;
        }
        withdraw(amount) {
            if (amount <= this.balance + this.overdraftLimit) {
                this.balance -= amount;
                this.history.push(`Rút: -${amount} - Số dư: ${this.balance}`);
            }
            else {
                this.history.push(`Rút thất bại`);
            }
        }
    }
    let acc = new CheckingAccount("123", 1000, [], "Active", 500);
    acc.deposit(500);
    acc.withdraw(1200);
    acc.withdraw(500);
    acc.showHistory();
})(B08 || (B08 = {}));
