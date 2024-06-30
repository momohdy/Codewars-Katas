function countChange(money, coins) {
  if (money < coins.reduce((a, b) => a + b)) {
    return 0;
  }

  
}

console.log(countChange(11, [5, 7]));
