import { expect } from 'chai'; 
import add from '../src/add.js'

describe('add function', () => {
  it('should return the correct sum of two numbers', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(0, 0)).toBe(0);
    expect(add(-3, 7)).toBe(4);
    // Add more test cases as needed
  });

  it('should handle non-numeric inputs gracefully', () => {
    // Test with non-numeric inputs
    expect(() => add('a', 5)).toThrow(); // Example assuming it throws an error for non-numeric inputs
    // Add more test cases for non-numeric inputs
  });
});
