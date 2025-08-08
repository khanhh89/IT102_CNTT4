const listProduct = [
    {
        id: "a1",
        name: "Điện thoại đời cũ",
        price: 200000,
        category: {
            id: "b1",
            name: "Điện tử"
        },
        discount: 10
    },
    {
        id: "a2",
        name: "Xe đạp",
        price: 200000,
        category: {
            id: "b2",
            name: "Thể thao"
        },
        discount: 90
    },
    {
        id: "a3",
        name: "Điện thoại đời mới",
        price: 200000,
        category: {
            id: "b3",
            name: "Điện tử"
        },
        discount: 3
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount / 100);
    }
    return product.price;
}
function printProduct(product) {
    const finaPrice = getFinalPrice;
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price}`);
    console.log(`Giá sau khi giảm: ${finaPrice(product)}`);
    console.log(`Danh mục: ${product.category.name}`);
}
printProduct(listProduct[1]);
