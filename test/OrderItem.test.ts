import OrderItem from "../src/OrderItem";

test("Should create an order item", () => {
    const orderItem = new OrderItem(1, 100, 1);
    expect(orderItem.getTotal()).toBe(100);
})