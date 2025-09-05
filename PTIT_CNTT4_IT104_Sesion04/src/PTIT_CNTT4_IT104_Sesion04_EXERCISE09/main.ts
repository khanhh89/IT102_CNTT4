interface Item {
  readonly id: string;
  name: string;
  price: number;
}

interface OrderDetail {
  item: Item;
  amount: number;
  note?: string;
}

interface Purchase {
  purchaseId: string;
  clientName: string;
  details: OrderDetail[];
  shippingAddress: string;
  isSettled: boolean;
}

interface Bill {
  billId: string;
  purchases: Purchase[];
  issuedAt: Date;
}

const i1 = { id: "A1", name: "Áo sơ mi", price: 250000 };
const i2 = { id: "Q1", name: "Quần jean", price: 400000 };
const i3 = { id: "V1", name: "Váy hoa", price: 700000 };

const p1 = { purchaseId: "ORD001", clientName: "Nguyễn Văn A", details: [{ item: i1, amount: 2 }, { item: i2, amount: 1 }], shippingAddress: "Đà Nẵng", isSettled: true };
const p2 = { purchaseId: "ORD002", clientName: "Trần Thị B", details: [{ item: i3, amount: 1, note: "size M" }], shippingAddress: "Hà Nội", isSettled: false };

const b1 = { billId: "INV001", purchases: [p1, p2], issuedAt: new Date("2024-05-14") };

function calculateBillTotal(bill: Bill): number {
  return bill.purchases.reduce((sum, p) => sum + p.details.reduce((s, d) => s + d.item.price * d.amount, 0), 0);
}

function getUnsettledPurchases(bill: Bill): Purchase[] {
  return bill.purchases.filter(p => !p.isSettled);
}

function printBill(bill: Bill): void {
  const total = calculateBillTotal(bill);
  console.log(`HÓA ĐƠN: #${bill.billId} - Ngày tạo: ${bill.issuedAt.toLocaleDateString('vi-VN')}`);
  console.log("________");
  bill.purchases.forEach(p => {
    console.log(`ĐƠN HÀNG: #${p.purchaseId} - ${p.clientName}`);
    p.details.forEach(d => console.log(`${d.item.name} x ${d.amount} => ${(d.item.price * d.amount).toLocaleString('vi-VN')} VNĐ${d.note ? ` (note: ${d.note})` : ''}`));
    console.log(`Tổng đơn: ${p.details.reduce((s, d) => s + d.item.price * d.amount, 0).toLocaleString('vi-VN')} VNĐ`);
    console.log(`Trạng thái: ${p.isSettled ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
    console.log("");
  });
  console.log(`Tổng cộng hóa đơn: ${total.toLocaleString('vi-VN')} VNĐ`);
}

printBill(b1);