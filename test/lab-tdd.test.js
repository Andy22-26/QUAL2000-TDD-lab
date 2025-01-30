//imports
const {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

///////Suite and tests
describe("lab-tdd test", () => {
    // Add function tests
    describe("Add function tests", () => {
        test("Add function should return 15 when adding 7 and 8", () => {
            assert.strictEqual(add(7, 8), 15);
        });
        test("Add function should return -3 when adding -10 and 7", () => {
            assert.strictEqual(add(-10, 7), -3);
        });
    });

    // Subtract function tests
    describe("Subtract function tests", () => {
        test("Subtract function should return 18 when subtracting 30 from 48", () => {
            assert.strictEqual(subtract(48, 30), 18);
        });
        test("Subtract function should return -25 when subtracting 20 from -5", () => {
            assert.strictEqual(subtract(-5, 20), -25);
        });
    });

    // Multiply function tests
    describe("Multiply function tests", () => {
        test("Multiply function should return 225 when multiplying 15 and 15", () => {
            assert.strictEqual(multiply(15, 15), 225);
        });
        test("Multiply function should return 0 when multiplying by 0", () => {
            assert.strictEqual(multiply(25, 0), 0);
        });
    });

    // Divide function tests
    describe("Divide function tests", () => {
        test("Divide function should return 7 when dividing 49 over 7", () => {
            assert.strictEqual(divide(49, 7), 7);
        });
        test("Zero division should throw an error", () => {
            assert.throws(() => divide(20, 0), Error);
        });
    });

    // Modulas function tests
    describe("Modulas function tests", () => {
        test("Modulas function should return 2 when finding 20 mod 6", () => {
            assert.strictEqual(modulas(20, 6), 2);
        });
        test("Modulas function should return 1 when finding 29 mod 7", () => {
            assert.strictEqual(modulas(29, 7), 1);
        });
    });

    // Power function tests
    describe("Power function tests", () => {
        test("Power function should return 125 when 5 is raised to the power of 3", () => {
            assert.strictEqual(power(5, 3), 125);
        });
        test("Power function should return 1 when any number is raised to the power of 0", () => {
            assert.strictEqual(power(9, 0), 1);
        });
    });

    // SquareRoot function tests
    describe("SquareRoot function tests", () => {
        test("SquareRoot function should return 9 when finding the square root of 81", () => {
            assert.strictEqual(squareRoot(81), 9);
        });
        test("SquareRoot function should throw an error when finding the square root of a negative number", () => {
            assert.throws(() => squareRoot(-16), Error);
        });
    });

    // Floor function tests
    describe("Floor function tests", () => {
        test("Floor function should return 9 when flooring 9.99", () => {
            assert.strictEqual(floor(9.99), 9);
        });
        test("Floor function should return -8 when flooring -7.2", () => {
            assert.strictEqual(floor(-7.2), -8);
        });
    });

    // Ceiling function tests
    describe("Ceiling function tests", () => {
        test("Ceiling function should return 22 when ceiling 21.4", () => {
            assert.strictEqual(ceiling(21.4), 22);
        });
        test("Ceiling function should return -6 when ceiling -6.9", () => {
            assert.strictEqual(ceiling(-6.9), -6);
        });
    });
});
