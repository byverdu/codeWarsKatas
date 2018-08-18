/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  Examples: 

  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(iterable) {
  const tempData = Array.isArray(iterable) ? iterable : iterable.split('');
  
  return tempData.reduce((acc, curr, index, arr) => {
    
    if (curr !== arr[(index + 1)]) {
      acc.push(curr);
    }
    
    return acc;
    
  }, []);
}

describe('Unique In Order function', () => {
  it('uniqueInOrder is defined', () => {
    expect(uniqueInOrder).toBeDefined();
  });
  it('uniqueInOrder should return an array with items in same order and not repeated', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
  });
});