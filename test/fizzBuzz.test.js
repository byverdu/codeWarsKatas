/*
  Write a function fizzBuzz with the below signature.

  Write a short program that prints each number from 1 to 100 on a new line. 

  - For each multiple of 3, print "Fizz" instead of the number. 
  - For each multiple of 5, print "Buzz" instead of the number. 
  - numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

  Test.assertEquals(fizzBuzz('lol'), false, "Input: Your parameter is not a number");
  Test.assertEquals(fizzBuzz(3), true, "Input: Fizz");
  Test.assertEquals(fizzBuzz(5), true, "Input: Buzz");
  Test.assertEquals(fizzBuzz(15), true, "Input: FizzBuzz");
  Test.assertEquals(fizzBuzz(8), true, "Input: 8");
*/

function fizzBuzz(counter) {
  if (isNaN(counter)) {
    throw new Error('Your parameter is not a number');
  }

  const isMultipleOfThree = val => val % 3 === 0;
  const isMultipleOfFive = val => val % 5 === 0;
  const isMultipleOfThreeAndFive = val => isMultipleOfThree(val) && isMultipleOfFive(val);

  if (isMultipleOfThreeAndFive(counter)) {
    return 'FizzBuzz'
  } else if (isMultipleOfThree(counter)) {
    return 'Fizz'
  } else if (isMultipleOfFive(counter)) {
    return 'Buzz'
  } else {
    return counter;
  }
}

describe('fizzBuzz', () => {
  it('should be defined', () => {
    expect(fizzBuzz).toBeDefined();
  });
  it('should only accept numbers', () => {
    expect(() => fizzBuzz('34')).not.toThrow('Your parameter is not a number');
    expect(() => fizzBuzz(34)).not.toThrow('Your parameter is not a number');
    expect(() => fizzBuzz('lol')).toThrow('Your parameter is not a number');
  });
  it('should return Fizz if a number is multiple of 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz')
  });
  it('should return Buzz if a number is multiple of 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz')
  })
  it('should return FizzBuzz if a number is multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  });
  it('should return the number if it is not multiple of 3 and 5', () => {
    expect(fizzBuzz(8)).toEqual(8)
  });
});

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i))
}