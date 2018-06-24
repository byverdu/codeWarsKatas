/*
  Given a string of words, you need to find the highest scoring word.

  Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

  You need to return the highest scoring word as a string.

  If two words score the same, return the word that appears earliest in the original string.

  All letters will be lowercase and all inputs will be valid.

  highestScoringWord('man i need a taxi up to ubud') // taxi
  highestScoringWord('what time are we climbing up the volcano') // volcano
  highestScoringWord('take me to semynak') // semynak
*/

const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
const alphabetKeyValue = alphabet.split(',')
  .map((item, index) => ({[item]: (index+1)}));

function highestScoringWord(sentence) {
  const splitPhrase = sentence.split(' ');
  
  const result = splitPhrase.map(word => {
    const splitWord = word.split('');
    let count = 0;
    
    splitWord.forEach(letter => {
      const value = alphabetKeyValue.find(item => item[letter]);
      count += value[letter];
    })
    
    return {word, count};
  });
  
  return result.sort((a,b) => b.count - a.count).shift()['word'];
}

describe('Helpers', () => {
  it('alphabetKeyValue is defined', () => {
    expect(alphabetKeyValue).toBeDefined();
  });
  it('alphabetKeyValue should map the alphabet letters with it\'s value', () => {
    expect(alphabetKeyValue[0]).toEqual({a: 1});
    expect(alphabetKeyValue[(alphabetKeyValue.length - 1)]).toEqual({z: 26});    
  });
});

describe('highestScoringWord method', () => {
  it('highestScoringWord is defined', () => {
    expect(highestScoringWord).toBeDefined();
  });
  it('highestScoringWord should the word that has the highest count in a sentence', () => {
    expect(highestScoringWord('man i need a taxi up to ubud')).toEqual('taxi')
    expect(highestScoringWord('what time are we climbing up the volcano')).toEqual('volcano')
    expect(highestScoringWord('take me to semynak')).toEqual('semynak')
  });
});
