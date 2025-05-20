const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../stringUtils');

describe('reverseString', () => {
    test('should reverse a regular string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should reverse an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('should reverse a string with special characters', () => {
        expect(reverseString('a!b@c')).toBe('c@b!a');
    });
});

describe('isPalindrome', () => {
    test('should return true for a simple palindrome', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('should return true for a palindrome with spaces and mixed case', () => {
        expect(isPalindrome('A n n a')).toBe(true);
    });

    test('should return false for a non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('should return true for a palindrome with uppercase letters', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('should return true for a palindrome with spaces', () => {
        expect(isPalindrome('nurses run')).toBe(true);
    });
});

describe('truncateString', () => {
    test('should not truncate if string is shorter than maxLength', () => {
        expect(truncateString('hello', 10)).toBe('hello');
    });

    test('should truncate and add ellipsis if string is longer than maxLength', () => {
        expect(truncateString('hello world', 5)).toBe('hello...');
    });

    test('should return the original string if length equals maxLength', () => {
        expect(truncateString('hello', 5)).toBe('hello');
    });

    test('should handle empty string', () => {
        expect(truncateString('', 3)).toBe('');
    });

    test('should handle maxLength of 0', () => {
        expect(truncateString('hello', 0)).toBe('...');
    });
});

describe('countCharacters', () => {
    test('should count characters in a simple string', () => {
        expect(countCharacters('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
    });

    test('should return empty object for empty string', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('should count spaces and special characters', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });

    test('should be case sensitive', () => {
        expect(countCharacters('AaA')).toEqual({ A: 2, a: 1 });
    });
});