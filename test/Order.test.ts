import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';

test('Should not create an order with invalid CPF', () => {
    expect(() => new Order('111')).toThrowError('Invalid CPF');
});

test('Should create an order with 3 items', () => {
    const order = new Order('201.079.309-94');
    order.addItem(new Item(1, 'chair', 200), 1);
    order.addItem(new Item(1, 'desk', 700), 1);
    order.addItem(new Item(1, 'mouse', 100), 1);
    const total = order.getTotal();
    expect(total).toBe(1000);
})

test('Should create an order with a discount coupon code', () => {
    const order = new Order('201.079.309-94');
    order.addItem(new Item(1, 'chair', 200), 1);
    order.addItem(new Item(1, 'desk', 700), 1);
    order.addItem(new Item(1, 'mouse', 100), 1);
    order.addCoupon(new Coupon('COUPON_20', 20));
    const total = order.getTotal();
    expect(total).toBe(800);
}) 