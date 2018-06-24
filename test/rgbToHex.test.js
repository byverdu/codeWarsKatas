/*
  The rgbToHex() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

  The following are examples of expected output values:

  rgb(255, 255, 255) // returns FFFFFF
  rgb(255, 255, 300) // returns FFFFFF
  rgb(0,0,0) // returns 000000
  rgb(148, 0, 211) // returns 9400D3
*/
function verifyNumber(num) {
  if (num < 0) {
    return 0;
  }
  if (num > 255) {
    return 255;
  }
  return num;
}

const convertToHex = num => {
 const hex = Math.abs(num).toString(16);

 return hex.length === 1 ? `0${hex}` : hex;
};
const hexBuilder = num => convertToHex(verifyNumber(num));
const rgbToHex = (r, g, b) => `#${hexBuilder(r)}${hexBuilder(g)}${hexBuilder(b)}`.toUpperCase();


describe('Helpers', () => {
  it('verifyNumber is defined', () => {
    expect(verifyNumber).toBeDefined();
  });
  it('verifyNumber should return 0 for negative values', () => {
    expect(verifyNumber(-1)).toEqual(0);
    expect(verifyNumber(1)).toEqual(1);    
  });
  it('verifyNumber should return 255 for values bigger than 255', () => {
    expect(verifyNumber(356)).toEqual(255);
    expect(verifyNumber(45)).toEqual(45);    
  });
  it('convertToHex is defined', () => {
    expect(convertToHex).toBeDefined();
  });
  it('converToHex should convert an integer to string with radix 16', () => {
    expect(convertToHex(0)).toEqual('00');
    expect(convertToHex(8)).toEqual('08');
    expect(convertToHex(10)).toEqual('0a');
    expect(convertToHex(14)).toEqual('0e');
    expect(convertToHex(233)).toEqual('e9');
  });
});

describe('RGB To Hex Conversion', () => {
  it('rgbToHex is defined', () => {
    expect(rgbToHex).toBeDefined();
  });
  it('rgbToHex should convert an rgb color to it\'s hex representation', () => {
    expect(rgbToHex(255, 255, 255)).toEqual('#FFFFFF');
    expect(rgbToHex(0, 0, 0)).toEqual('#000000');
    expect(rgbToHex(255, 0, 34)).toEqual('#FF0022');
    expect(rgbToHex(165, 255, 34)).toEqual('#A5FF22');
    expect(rgbToHex(173,255,47)).toEqual('#ADFF2F');
    expect(rgbToHex(55, 0, 34)).toEqual('#370022');
    expect(rgbToHex(55, 150, 234)).toEqual('#3796EA');
  });
});