abstract class Product {
    private static nextId: number = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;
    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo(): string {
        return `ID: ${this.id}, Tên: ${this.name}, Giá: ${this.price} VND, Tồn kho: ${this.stock}, Bảo hành: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(distance: number): number {
        return 50000;
    }

    getCategory(): string {
        return "Đồ điện tử";
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo(): string {
        return `ID: ${this.id}, Tên: ${this.name}, Giá: ${this.price} VND, Tồn kho: ${this.stock}, Size: ${this.size}, Màu: ${this.color}`;
    }
    getShippingCost(distance: number): number {
        return 25000;
    }
    getCategory(): string {
        return "Quần áo";
    }
}

class Customer {
    private static nextId: number = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;
    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `ID: ${this.id}, Tên: ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
    }
}

class Order {
    private static nextId: number = 1;
    orderId: number;
    customer: Customer;
    products: { product: Product; quantity: number }[];
    totalAmount: number;

    constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }

    private calculateTotal(): number {
        return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }

    getDetails(): string {
        let details = `Mã đơn hàng: ${this.orderId}, Khách hàng: ${this.customer.name}\nSản phẩm:\n`;
        this.products.forEach(item => {
            details += `- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} VND\n`;
        });
        details += `Tổng tiền: ${this.totalAmount} VND`;
        return details;
    }
}

class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): void {
        const customer = new Customer(name, email, address);
        this.customers.push(customer);
        console.log(`Đã thêm khách hàng: ${customer.getDetails()}`);
    }

    createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | null {
        const customer = this.findById(this.customers, customerId);
        if (!customer) {
            console.log(`Không tìm thấy khách hàng với ID ${customerId}`);
            return null;
        }
        const orderProducts: { product: Product; quantity: number }[] = [];
        let valid = true;
        for (const pq of productQuantities) {
            const product = this.findById(this.products, pq.productId);
            if (product && product.stock >= pq.quantity) {
                product.sell(pq.quantity);
                orderProducts.push({ product, quantity: pq.quantity });
            } else {
                valid = false;
                break;
            }
        }

        if (!valid) {
            orderProducts.forEach(op => op.product.restock(op.quantity));
            console.log(`Không thể tạo đơn hàng do tồn kho không đủ.`);
            return null;
        }

        const order = new Order(customer, orderProducts);
        this.orders.push(order);
        console.log(`Đã tạo đơn hàng:\n${order.getDetails()}`);
        return order;
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(item => item.product.restock(item.quantity));
            this.orders.splice(index, 1);
            console.log(`Đã hủy đơn hàng ID ${orderId}`);
        } else {
            console.log(`Không tìm thấy đơn hàng với ID ${orderId}.`);
        }
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            console.log("Không còn sản phẩm nào trong kho.");
        } else {
            console.log("Danh sách sản phẩm còn hàng:");
            available.forEach(p => console.log(p.getProductInfo()));
        }
    }

    listCustomerOrders(customerId: number): void {
        const customerOrders = this.orders.filter(o => o.customer.id === customerId);
        if (customerOrders.length === 0) {
            console.log(`Không có đơn hàng nào cho khách hàng ID ${customerId}.`);
        } else {
            console.log(`Danh sách đơn hàng của khách hàng ID ${customerId}:`);
            customerOrders.forEach(o => console.log(o.getDetails() + "\n"));
        }
    }

    calculateTotalRevenue(): number {
        const revenue = this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
        console.log(`Tổng doanh thu: ${revenue} VND`);
        return revenue;
    }

    countProductsByCategory(): void {
        const counts = this.products.reduce((acc: { [key: string]: number }, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});

        console.log("Số lượng sản phẩm theo danh mục:");
        Object.keys(counts).forEach(cat => {
            console.log(`${cat}: ${counts[cat]}`);
        });
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Cập nhật tồn kho cho sản phẩm ID ${productId} thành ${newStock}.`);
        } else {
            console.log(`Không tìm thấy sản phẩm với ID ${productId}.`);
        }
    }

    findById<T extends { id: number }>(array: T[], id: number): T | undefined {
        return array.find(item => item.id === id);
    }

    viewProductDetails(productId: number): void {
        const product = this.findById(this.products, productId);
        if (product) {
            console.log(product.getProductInfo());
        } else {
            console.log(`Không tìm thấy sản phẩm với ID ${productId}.`);
        }
    }
}

// ------------------ Demo ------------------
const store = new Store();
store.addCustomer("Khanh", "khanh@gmail.com", "HN1");
const laptop = new ElectronicsProduct("Iphone", 15000000, 10, 12);
store.addProduct(laptop);
const shirt = new ClothingProduct("Quần bò", 200000, 50, "M", "Xanh");
store.addProduct(shirt);
store.createOrder(1, [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }]);
store.listAvailableProducts();
store.listCustomerOrders(1);
store.calculateTotalRevenue();
store.countProductsByCategory();
store.updateProductStock(1, 20);
store.viewProductDetails(2);
store.cancelOrder(1);