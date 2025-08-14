"use strict";
class Product {
    constructor(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
Product.nextId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `ID: ${this.id}, Tên: ${this.name}, Giá: ${this.price} VND, Tồn kho: ${this.stock}, Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Đồ điện tử";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `ID: ${this.id}, Tên: ${this.name}, Giá: ${this.price} VND, Tồn kho: ${this.stock}, Size: ${this.size}, Màu: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Quần áo";
    }
}
class Customer {
    constructor(name, email, shippingAddress) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id}, Tên: ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
    }
}
Customer.nextId = 1;
class Order {
    constructor(customer, products) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }
    calculateTotal() {
        return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getDetails() {
        let details = `Mã đơn hàng: ${this.orderId}, Khách hàng: ${this.customer.name}\nSản phẩm:\n`;
        this.products.forEach(item => {
            details += `- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} VND\n`;
        });
        details += `Tổng tiền: ${this.totalAmount} VND`;
        return details;
    }
}
Order.nextId = 1;
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        const customer = new Customer(name, email, address);
        this.customers.push(customer);
        console.log(`Đã thêm khách hàng: ${customer.getDetails()}`);
    }
    createOrder(customerId, productQuantities) {
        const customer = this.findById(this.customers, customerId);
        if (!customer) {
            console.log(`Không tìm thấy khách hàng với ID ${customerId}`);
            return null;
        }
        const orderProducts = [];
        let valid = true;
        for (const pq of productQuantities) {
            const product = this.findById(this.products, pq.productId);
            if (product && product.stock >= pq.quantity) {
                product.sell(pq.quantity);
                orderProducts.push({ product, quantity: pq.quantity });
            }
            else {
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
    cancelOrder(orderId) {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(item => item.product.restock(item.quantity));
            this.orders.splice(index, 1);
            console.log(`Đã hủy đơn hàng ID ${orderId}`);
        }
        else {
            console.log(`Không tìm thấy đơn hàng với ID ${orderId}.`);
        }
    }
    listAvailableProducts() {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            console.log("Không còn sản phẩm nào trong kho.");
        }
        else {
            console.log("Danh sách sản phẩm còn hàng:");
            available.forEach(p => console.log(p.getProductInfo()));
        }
    }
    listCustomerOrders(customerId) {
        const customerOrders = this.orders.filter(o => o.customer.id === customerId);
        if (customerOrders.length === 0) {
            console.log(`Không có đơn hàng nào cho khách hàng ID ${customerId}.`);
        }
        else {
            console.log(`Danh sách đơn hàng của khách hàng ID ${customerId}:`);
            customerOrders.forEach(o => console.log(o.getDetails() + "\n"));
        }
    }
    calculateTotalRevenue() {
        const revenue = this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
        console.log(`Tổng doanh thu: ${revenue} VND`);
        return revenue;
    }
    countProductsByCategory() {
        const counts = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log("Số lượng sản phẩm theo danh mục:");
        Object.keys(counts).forEach(cat => {
            console.log(`${cat}: ${counts[cat]}`);
        });
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Cập nhật tồn kho cho sản phẩm ID ${productId} thành ${newStock}.`);
        }
        else {
            console.log(`Không tìm thấy sản phẩm với ID ${productId}.`);
        }
    }
    findById(array, id) {
        return array.find(item => item.id === id);
    }
    viewProductDetails(productId) {
        const product = this.findById(this.products, productId);
        if (product) {
            console.log(product.getProductInfo());
        }
        else {
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
