class _vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfor() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}
const $vehicle = new _vehicle("Khanh", 2000, "Grab", 30);
$vehicle.printInfor();
