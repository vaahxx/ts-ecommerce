"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
test('Should not create an order with invalid CPF', () => {
    expect(() => new Order_1.default('111')).toThrowError('Invalid CPF');
});
test('Should create an order with 3 items', () => {
    const order = new Order_1.default('201.079.309-94');
    order.addItem(new Item_1.default(1, 'chair', 100), 1);
    const total = order.getTotal();
    expect(total).toBe(100);
});
