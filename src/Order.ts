import Cpf from "./Cpf";
import OrderItem from "./OrderItem";
import Item from "./Item";
import Coupon from "./Coupon";
export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    getTotal() {
        let total = this.orderItems.reduce((total, orderItem) => total + orderItem.getTotal(), 0);
        if (this.coupon) total -= this.coupon.calculateDiscount(total);
        return total;
    }
}