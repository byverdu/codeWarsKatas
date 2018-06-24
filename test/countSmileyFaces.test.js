/*
  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:
  -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  -Every smiling face must have a smiling mouth that should be marked with either ) or D.
  No additional characters are allowed except for those mentioned.
  Valid smiley face examples:
  :) :D ;-D :~)
  Invalid smiley faces:
  ;( :> :} :]
    
  Test.assertEquals(countSmileys([]), 0);
  Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
  Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
  Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
*/

const smile = {
  eyes: [':', ';'],
  nose: ['-', '~'],
  mouth: [')', 'D']
}

const hasValidEyes = face => smile.eyes.indexOf(face.charAt(0))  !== -1;
const hasValidNose = face => smile.nose.indexOf(face.charAt(1))  !== -1;
const hasValidMouth = (face, position) => smile.mouth.indexOf(face.charAt(position))  !== -1;


const validFaceWithNose = face => {
  return face.length === 3 &&
    hasValidEyes(face) &&
    hasValidNose(face) &&
    hasValidMouth(face, 2);
};

const validFaceWithoutNose = face => {
  return face.length === 2 &&
    hasValidEyes(face) &&
    hasValidMouth(face, 1);
};

function countSmileys (smiles) {
  if (!Array.isArray(smiles)) {
    throw new Error('Your parameter is not an Array');
  }
  
  let smileyCounter = 0;
  const possibleFace = face => face.length <= 3;

  smiles.forEach(face => {
    if (possibleFace(face)) {

      if (validFaceWithNose(face)) {
        smileyCounter++;
      }
      
      if (validFaceWithoutNose(face)) {
        smileyCounter++;
      }
    }
  });

  return smileyCounter;
}

describe('Helpers', () => {
  it('hasValidEyes is defined', () => {
    expect(hasValidEyes).toBeDefined();
  });
  it('hasValidEyes should check if the eyes are valid', () => {
    expect(hasValidEyes(':-)')).toBeTruthy();
    expect(hasValidEyes('3-)')).toBeFalsy();    
  });
  it('hasValidNose is defined', () => {
    expect(hasValidNose).toBeDefined();
  });
  it('hasValidNose should check if the nose is valid', () => {
    expect(hasValidNose(':-)')).toBeTruthy();
    expect(hasValidNose(':_)')).toBeFalsy();    
  });
  it('hasValidMouth is defined', () => {
    expect(hasValidMouth).toBeDefined();
  });
  it('hasValidMouth should check if the mouth is valid', () => {
    expect(hasValidMouth(':-)', 2)).toBeTruthy();
    expect(hasValidMouth(':)', 1)).toBeTruthy();
    expect(hasValidMouth(':-(', 2)).toBeFalsy();    
  });


  it('validFaceWithNose is defined', () => {
    expect(validFaceWithNose).toBeDefined();
  });
  it('validFaceWithNose should return true if the face has all 3 elements', () => {
    expect(validFaceWithNose(':-)')).toBeTruthy();
    expect(validFaceWithNose(':--)')).toBeFalsy();    
  });
  it('validFaceWithNose should check if has a valid smiley', () => {
    expect(validFaceWithNose(':-)')).toBeTruthy();
    expect(validFaceWithNose('3-)')).toBeFalsy();    
  });

  it('validFaceWithoutNose is defined', () => {
    expect(validFaceWithoutNose).toBeDefined();
  });
  it('validFaceWithoutNose should return true if the face has all 2 elements', () => {
    expect(validFaceWithoutNose(':)')).toBeTruthy();
    expect(validFaceWithoutNose(':-)')).toBeFalsy();    
  });
  it('validFaceWithoutNose should check if has a valid smiley', () => {
    expect(validFaceWithoutNose(';)')).toBeTruthy();
    expect(validFaceWithoutNose(':(')).toBeFalsy();    
  });
});

describe('countSmileys method', () => {
  it('countSmileys is defined', () => {
    expect(countSmileys).toBeDefined();
  });
  it('countSmileys should throw an error if the parameter is not an Array', () => {
    expect(() => {
      countSmileys(0);
    }).toThrow('Your parameter is not an Array');
  });
  it('countSmileys should return 0 for an empty array', () => {
    expect(countSmileys([])).toEqual(0);
  });
  it('countSmileys should count smiles', () => {
    expect(countSmileys([':D',':~)',';~D',':)'])).toEqual(4);
    expect(countSmileys([':)',':(',':D',':O',':;'])).toEqual(2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
  });
});