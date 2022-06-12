export default class Coupon {
    constructor(readonly code: string, readonly discount: number) {

    }

    calculateDiscount(total: number) {
        return total * (this.discount / 100);
    }
}