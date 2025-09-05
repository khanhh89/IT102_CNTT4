function getOrderSummary(products) {
    if (products === undefined || products === null) {
        products = [];
    }
    var totalBeforeDiscount = 0;
    var totalAfterDiscount = 0;
    var details = [];
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var name = "unknown";
        var price = 0;
        var discount = 0;
        var quantity = 0;
        var minQuantity = 0;
        var extraDiscount = 0;
        if (product.name) {
            name = product.name;
        }
        if (product.price) {
            price = product.price;
        }
        if (product.discount) {
            discount = product.discount;
        }
        if (product.quantity) {
            quantity = product.quantity;
        }
        if (product.bulkDiscount && product.bulkDiscount.minQuantity) {
            minQuantity = product.bulkDiscount.minQuantity;
        }
        if (product.bulkDiscount && product.bulkDiscount.extraDiscount) {
            extraDiscount = product.bulkDiscount.extraDiscount;
        }

        var finalPrice = price * (1 - discount);
        if (quantity >= minQuantity) {
            finalPrice = finalPrice * (1 - extraDiscount);
        }
        var subtotal = finalPrice * quantity;
        totalBeforeDiscount = totalBeforeDiscount + (price * quantity);
        totalAfterDiscount = totalAfterDiscount + subtotal;
        var productDetail = {
            name: name,
            finalPrice: finalPrice,
            quantity: quantity,
            subtotal: subtotal
        };
        details.push(productDetail);
    }
    var result = {
        totalBeforeDiscount: totalBeforeDiscount,
        totalAfterDiscount: totalAfterDiscount,
        details: details
    };

    return result;
}
var products = [
    { name: "A", price: 100, discount: 0.1, quantity: 2 },
    { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
    { name: "C", price: 300, discount: 0.2, quantity: 3, bulkDiscount: { minQuantity: 2, extraDiscount: 0.1 } }
];

console.log(getOrderSummary(products));