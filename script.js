
function convertToRoman(num) {
   const symbols = {
     1000:{symbol : 'M', mayor: ''},
     900: {symbol: 'CM', mayor: ''},
     500: {symbol: 'D', mayor: 'C'},
     100: {symbol: 'C', mayor: 'D'},
     90: {symbol: 'XC', mayor: ''},
     50: {symbol:'L', mayor : 'C'},
     10: {symbol:'X', mayor: 'L'},
     9: {symbol:'IX', mayor: ''},
     5: {symbol:'V', mayor: ''},
     1: {symbol:'I', menor: '', mayor: 'V'}
   };
 
  const keys = [1000, 900,500, 100,90, 50, 10, 9, 5, 1];
  
  var romanNumber = [];
 
  while (num > 0){
    keys.find((key)=> {
     if (num >= key) {
       [num, romanNumber] = reduce(num, romanNumber, key);
       return key;
     } 
   });
 }
 return romanNumber.join('');
  
 function reduce(num, arr, romanKey){
  const roman = symbols[romanKey];
  num -= romanKey;
  arr.push(roman.symbol);
   
  const isRepeated = arr.slice(-4, -1).every((val => (val == roman.symbol)));
    
  if (arr.length >= 4 && isRepeated){
    arr.splice(-4,4,`${roman.symbol}${roman.mayor}`);  
  }
  return[num, arr];
 }
}

const $ = (sel) => document.querySelector(sel)

// view controls
const input  = $('#in-number')
const button = $('#btn-convert')
const viewer = $('#roman')

button.addEventListener('click', () => {
  const num = input.value
  const result = (num > 0) ? convertToRoman(num) : 'this is not a number'
  viewer.innerHTML = result
  })