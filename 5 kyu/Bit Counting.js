



var countBits = function(dicemal) {
    let binaryOnes = 0
    while (dicemal) {
        binaryOnes += (dicemal % 2)
        dicemal /= 2
        dicemal = parseInt(dicemal)
    }
    return binaryOnes

    // ALTERNATIVE  
    // return dicemal.toString(2).split('0').join('').length
    
};

console.log(countBits(1234));
console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));

