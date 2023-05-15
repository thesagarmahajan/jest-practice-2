const {Addition, Subtraction, Division} = require("../../SimpleExamples/Calculator")

describe('Testing the Calculator', () => {
    test('While Adding Numbers', () => {
        expect(Addition(1, 2)).toBe(3)
    });
    
    test('While Subtracting Numbers', () => {
        expect(Subtraction(1, 1)).toBe(0)
        expect(Subtraction(2, 1)).toBe(1)
        expect(Subtraction(1, 2)).toBe(1)
        expect(Subtraction(1, 2)).not.toBe(-1);
    });
    
    test('Dividing Numbers', () => {
        expect(Division(12, 6)).toBe(2);
        expect(Division(6, 12)).toBe(2);
        expect(() => {
            Division(12, 0)
        }).toThrow();
        expect(() => {
            Division(0, 12)
        }).toThrow();
        expect(Division(0, 0)).toThrow();
    });
});

