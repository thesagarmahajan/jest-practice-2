const {Addition, Subtraction, Division} = require("../../SimpleExamples/Calculator")

describe('Testing the Calculator', () => {
    test('While Adding Numbers', () => {
        // toBe is a matcher
        expect(Addition(1, 2)).toBe(3)
    });
    
    test('While Subtracting Numbers', () => {
        expect(Subtraction(1, 1)).toBe(0)
<<<<<<< HEAD
        expect(Subtraction(2, 1)).toBe(1)
        expect(Subtraction(1, 2)).toBe(1)
=======
        // not is a modifier
>>>>>>> 2fa1005cb7a95d9520f9b860c984cf83feb1dad9
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

