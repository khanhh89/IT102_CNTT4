class vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company} `);
    }
}
const vehicle1 = new vehicle("Xe đạp", 20000, "Honda");
vehicle1.printInfo();
