/*
  Find the anonymous function in the given array and use the function to filter the array

  Input
  ------
  
  Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.
  
  Output
  ------

  Your output. Output a filtered version of the second parameter using the function found in the first parameter.

  Test.assertSimilar(findFunctionInArray([(a=>a%2==0),9,3,1,0],[1,2,3,4]), [2,4])
  Test.assertSimilar(findFunctionInArray([9,3,(a=>a%2),1,0],[1,2,3,4]), [1,3])
*/

function findFunctionInArray(func, arr) {
  const fn = func.find(el => typeof el === 'function');

  return arr.filter(fn);
}

describe('findFunctionInArray method', () => {
  it('findFunctionInArray is defined', () => {
    expect(findFunctionInArray).toBeDefined();
  });
  it('findFunctionInArray should find a function', () => {
    expect(findFunctionInArray([(a=>a%2==0),9,3,1,0],[1,2,3,4])).toEqual([2,4]);
    expect(findFunctionInArray([9,3,(a=>a%2),1,0],[1,2,3,4])).toEqual([1,3]);
  });
});