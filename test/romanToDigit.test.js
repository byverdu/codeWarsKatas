/*
  Write a function romanToDigit with the below signature.

  - converts a Roman nunber into his correspendent arabic number
  - should throw an error if the Roman number is wrong
  - returns false for every other input.

  Test.assertEquals(romanToDigit('III'), true, "Input: 3");
  Test.assertEquals(romanToDigit('IV'), true, "Input: 4");
  Test.assertEquals(romanToDigit('VI'), true, "Input: 6");
  Test.assertEquals(romanToDigit('IIII'), false, "Input: That's not a valid Roman Number");
*/

const WRONG_AMOUNT_CHARS = 'WRONG_AMOUNT_CHARS';
const INVALID_CHARS = 'INVALID_CHARS';

function ErrorManager (type) {
  const errorTypes = {
    WRONG_AMOUNT_CHARS: () => {
      throw new Error('Your roman number has more than 3 equal characters in a row')
    },
    INVALID_CHARS: () => {
      throw new Error('Your roman number has invalid characters')
    }
  }

  return errorTypes[type]();
}

function hasInvalidRomanChars (charsToCheck, romanValues) {
  let isInvalid = false;
  const validChars = Object.keys(romanValues).join('');

  charsToCheck.split('')
    .forEach(element => {
      if (validChars.indexOf(element) === -1) {
        isInvalid = true;
      }
    });

  return isInvalid;
};

function hasWrongAmountNumbers (romanNumber) {
  const tempArr = romanNumber.split('');
  let currPosition = 0;
  let nextPosition = 1;
  let charCount = 0;
  const hasMoreThanThree = count => count > 3;
  const hasThreeOrLess = count => count <= 3;

  while (currPosition !== tempArr.length) {
    const currChar = tempArr[currPosition];
    const nextChar = tempArr[nextPosition];

    if (currChar === nextChar || currChar === tempArr[currPosition - 1]) {
      charCount += 1;
    }

    if (currChar !== nextChar && hasThreeOrLess(charCount)) {
      charCount = 0;
    }

    currPosition += 1;
    nextPosition += 1;
  }

  return hasMoreThanThree(charCount);
}

function romanToDigit(romanNumber) {
  const tempArr = romanNumber.split('');
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (hasInvalidRomanChars(romanNumber, romanValues)) {
    ErrorManager(INVALID_CHARS);
  }

  if (hasWrongAmountNumbers(romanNumber)) {
    ErrorManager(WRONG_AMOUNT_CHARS);
  }

  return tempArr.reduce((acc, curr, ind, arr) => {
    const currValue = romanValues[curr];
    const nextValue = romanValues[arr[ind+1]];

    if (currValue === nextValue || currValue > nextValue || !nextValue) {
      acc += currValue;
    } else if (currValue < nextValue) {
      acc -= currValue;
    }

    return acc;
  }, 0);
}

describe('romanToDigit function', () => {
  const romanValues = {
    XXV: 25,
    XXX: 30,
    IV: 4,
    CCC: 300,
    CMLXXXIII: 983,
    MMM: 3000,
    LVIII: 58
  };

  it('romanToDigit is defined', () => {
    expect(romanToDigit).toBeDefined();
  });
  it('romanToDigit should only accept valid roman numbers', () => {
    expect(() => romanToDigit('Z')).toThrow('Your roman number has invalid characters');
    expect(() => romanToDigit('IZI')).toThrow('Your roman number has invalid characters');
  });
  it('romanToDigit should throw an error if more than 3 same characters are in a row', () => {
    expect(() => romanToDigit('IIII')).toThrow('Your roman number has more than 3 equal characters in a row');
    expect(() => romanToDigit('IVVVV')).toThrow('Your roman number has more than 3 equal characters in a row');
  });

  Object.keys(romanValues)
    .forEach(key => {
      it(`romanToDigit should return for ${key} => ${romanValues[key]}`, () => {
        expect(romanToDigit(key)).toEqual(romanValues[key]);
      });    
    });
});
