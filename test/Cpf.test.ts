import Cpf from "../src/Cpf";

test("Should validate a valid CPF", function () {
	const cpf = new Cpf("935.411.347-80");
	expect(cpf.value).toBe("935.411.347-80");
});

const wrongSameDigitCpf = [
	"111.111.111-11",
	"222.222.222-22",
	"333.333.333-33"
];

test.each(wrongSameDigitCpf)("Should validate an invalid CPF with same digits", (cpf) => {
	expect(() => new Cpf(cpf)).toThrow(new Error("Invalid CPF"));
});