const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 22 + 20", () => {
            expect(addition(22,20)).toBe(42);
        })
        test("should return 73 for 42 + 31", () => {
            expect(addition(42,31)).toBe(73);
        })

    })
    describe("Subtraction function", () => {
        
    })
    describe("Multiply function", () => {
        
    })
    describe("Division function", () => {
        
    })
})