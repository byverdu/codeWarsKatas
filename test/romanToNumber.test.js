/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  Examples: 

  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
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

function romanToNumber(romanNumber) {
  const tempArr = romanNumber.split('');
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'M': 1000
  };

  if (hasInvalidRomanChars(romanNumber, romanValues)) {
    ErrorManager(INVALID_CHARS);
  }

  if (hasWrongAmountNumbers(romanNumber)) {
    ErrorManager(WRONG_AMOUNT_CHARS);
  }

  return tempArr.reduce((prev, curr, ind, arr) => {
    if (romanValues[curr] === romanValues[arr[ind+1]] || romanValues[curr] > romanValues[arr[ind+1]] || !romanValues[arr[ind+1]]) {
      prev += romanValues[curr];
    } else if (romanValues[curr] < romanValues[arr[ind+1]]) {
      prev -= romanValues[curr];
    }

    return prev;
  }, 0);
}

describe('romanToNumber function', () => {
  it('romanToNumber is defined', () => {
    expect(romanToNumber).toBeDefined();
  });
  it('romanToNumber should only accept valid roman numbers', () => {
    expect(() => romanToNumber('Z')).toThrow('Your roman number has invalid characters');
    expect(() => romanToNumber('IZI')).toThrow('Your roman number has invalid characters');
  });
  it('romanToNumber should throw an error if more than 3 same characters are in a row', () => {
    expect(() => romanToNumber('IIII')).toThrow('Your roman number has more than 3 equal characters in a row');
    expect(() => romanToNumber('IVVVV')).toThrow('Your roman number has more than 3 equal characters in a row');
  });
});
