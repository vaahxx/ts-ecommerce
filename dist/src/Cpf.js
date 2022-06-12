"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor(value) {
        this.FIRST_DIGIT_FACTOR = 10;
        this.SECOND_DIGIT_FACTOR = 11;
        if (!this.validate(value))
            throw new Error("Invalid CPF");
        this.value = value;
    }
    validate(rawCpf) {
        if (!rawCpf)
            return false;
        const cpf = this.cleanCpf(rawCpf);
        if (this.isInvalidLength(cpf))
            return false;
        if (this.isIdenticalDigits(cpf))
            return false;
        const calculatedCheckDigit1 = this.calculateCheckDigit(cpf, this.FIRST_DIGIT_FACTOR);
        const calculatedCheckDigit2 = this.calculateCheckDigit(cpf, this.SECOND_DIGIT_FACTOR);
        let checkDigit = this.extractCheckDigit(cpf);
        const calculatedCheckDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
        return checkDigit === calculatedCheckDigit;
    }
    cleanCpf(cpf) {
        return cpf.replace(/\D/g, "");
    }
    isInvalidLength(cpf) {
        return cpf.length !== 11;
    }
    isIdenticalDigits(cpf) {
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit);
    }
    calculateCheckDigit(cpf, factor) {
        const total = [...cpf].reduce((total, digit) => {
            if (factor > 1)
                total += parseInt(digit) * factor--;
            return total;
        }, 0);
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest;
    }
    extractCheckDigit(cpf) {
        return cpf.slice(-2);
    }
}
exports.default = Cpf;
