/*
  Write a function isIntArray with the below signature.

  - returns true if every element in an array is an integer. 
  - returns true if array is empty.
  - returns false for every other input.

  Test.assertEquals(isIntArray([]), true, "Input: []");
  Test.assertEquals(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
  Test.assertEquals(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");
*/

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(Number.isInteger);
}

describe('isIntArray method', () => {
  it('isIntArray is defined', () => {
    expect(isIntArray).toBeDefined();
  });
  it('isIntArray should return true for empty arrays and those filled with integers', () => {
    expect(isIntArray([])).toBeTruthy();
    expect(isIntArray([0,1,2])).toBeTruthy();
    expect(isIntArray([])).toBeTruthy();
    expect(isIntArray([null])).toBeFalsy();
    expect(isIntArray([1, 2, 3, NaN])).toBeFalsy();
    expect(isIntArray([1, '2', 3, NaN])).toBeFalsy();
    expect(isIntArray('[1, 2, 3, NaN]')).toBeFalsy();
    expect(isIntArray([1.0, 2.0, 3.0001])).toBeFalsy();
  });
});