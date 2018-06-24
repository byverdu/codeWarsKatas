/*
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = arr => {
  const nonZeros = arr.filter(item => item !== 0);
  const allZeros = arr.filter(item => item === 0);
  
  return [...nonZeros, ...allZeros]
};

describe('moveZeros method', () => {
  it('moveZeros is defined', () => {
    expect(moveZeros).toBeDefined();
  });
  it('moveZeros should move all 0 to the end of array', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0]);
  });
});
