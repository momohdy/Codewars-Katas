const dictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class RomanNumerals {
  static toRoman(num) {
    let str = "";

    for (var key in dictionary) {
      if (num >= dictionary[key]) {
        console.log(key + " : " + dictionary[key]);
        str += key
        num -= dictionary[key]
        while (num >= dictionary[key]) {
          str += key
          num -= dictionary[key]
        }
      }
    }

    return str;
  }

  static fromRoman(str) {
    let sum = 0
   
      for(var key in dictionary){
        while(str.startsWith(key)){
          sum += dictionary[key]
          str = str.replace(str.split("")[0],'')
        }
      }
    

    return sum
  }
}

console.log(RomanNumerals.fromRoman('XXI'));
