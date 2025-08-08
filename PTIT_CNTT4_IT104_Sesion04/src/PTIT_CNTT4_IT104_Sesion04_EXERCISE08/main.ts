interface Products {
  id: string;
  name: string;
  price: number;
}

interface OrderItem {
  product: Products;
  quantity: number;
}

interface Order {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
}

const addOrder: Order = {
  orderId: "ORD0001",
  customerName: "Nguyễn Văn A",
  items: [
    {
      product: { id: "A1", name: "Áo sơ mi", price: 20000000 },
      quantity: 2,
    },
    {
      product: { id: "P2", name: "Quần rách", price: 5000000 },
      quantity: 1,
    },
  ],
  note: "Giao Vào 23h",
};

function calculateOrder(order: Order): { total: number; itemTotals: number[] } {
  let total = 0;
  const itemTotals: number[] = [];
  for (const item of order.items) {
    const itemTotal = item.product.price * item.quantity;
    itemTotals.push(itemTotal);
    total += itemTotal;
  }
  return { total, itemTotals };
}

const { total: totalAmount, itemTotals } = calculateOrder(addOrder);
console.log(`Đơn hàng: #${addOrder.orderId}`);
console.log(`Khách hàng: ${addOrder.customerName}`);
console.log("Sản phẩm:");
addOrder.items.forEach((item, index) => {
  console.log(` ${item.product.name} x ${item.quantity} => ${itemTotals[index].toLocaleString('vi-VN')} VNĐ`);
});
console.log(`Tổng cộng: ${totalAmount.toLocaleString('vi-VN')} VNĐ`);
if (addOrder.note) {
  console.log(`Ghi chú: ${addOrder.note}`);
}