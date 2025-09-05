class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(` Loại công việc: ${this.type}`);
    }
}
class fullTime extends Job {
    constructor() {
        super("Fulltime");
    }
    caculateSalary() {
        return 100000;
    }
}
class partTime extends Job {
    constructor(_working) {
        super("partTime");
        this._working = _working;
    }
    caculateSalary() {
        return this._working * 30000;
    }
}
const $fullTime = new fullTime();
$fullTime.printType();
console.log(` Lương: ${$fullTime.caculateSalary().toLocaleString()}`);
const $partTime = new partTime(91);
$partTime.printType();
console.log(` Lương: ${$partTime.caculateSalary().toLocaleString()}`);
