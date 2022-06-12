import Coupon from "../src/Coupon";

test("Should create a coupon", () => {
    const coupon = new Coupon("COUPON_20", 20);
    expect(coupon.code).toBe("COUPON_20");
    expect(coupon.discount).toBe(20);
})