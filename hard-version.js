const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const hardVersion = async () => {
  const machineRequirements = await askQuestion("Enter machine requirements: ");
  const [r, c, d] = machineRequirements.split(" ").map(Number);

  const maxCapacities = await askQuestion("Enter maximum capacity: ");
  let [nR, nC, nD] = maxCapacities.split(" ").map(Number);

  const prices = await askQuestion("Enter prices: ");
  let [pR, pC, pD] = prices.split(" ").map(Number);

  let n = await askQuestion("Enter your budget: ");

  let maxMachines = Math.min(
    Math.floor(nR / r),
    Math.floor(nC / c),
    Math.floor(nD / d)
  );
  let v1 = maxMachines;

  while (v1) {
    nR -= r;
    nC -= c;
    nD -= d;
    v1--;
  }

  // SECOND VERSION

  let budget = +n;
  let v2 = 0;

  while (budget > 0) {
    if (nR) {
      if (nR - r > 0) {
        nR -= r;
      } 
      else {
        let diff = -1 * (nR - r);
        nR = 0;
        if (budget - pR * diff) {
          budget -= pR * diff;
        } else {
          break;
        }
      }
    } 
    else {
      if (budget - r * pR) {
        budget -= r * pR;
      } 
      else {
        break;
      }
    }

    
    if (nC) {
      if (nC - c > 0) {
        nC -= c;
      } 
      else {
        let diff = -1 * (nC - c);
        nC = 0;
        if (budget - pC * diff > 0) {
          budget -= pC * diff;
        } else {
          break;
        }
      }
    } 
    else {
      if (budget - (c * pC) > 0) {
        budget -= (c * pC);
      } 
      else {
        break;
      }
    }

    
    if (nD) {
      if (nD - d > 0) {
        nD -= d;
      } 
      else {
        let diff = -1 * (nD - d);
        nD = 0;
        if (budget - pD * diff > 0) {
          budget -= pD * diff;
        } else {
          break;
        }
      }
    } 
    else {
      if (budget - d * pD > 0) {
        budget -= d * pD;
      } 
      else {
        break;
      }
    }

    v2++
  }

  maxMachines += v2;

  return maxMachines;
};

const main = async () => {
  const testCasesNum = await askQuestion("Please enter test cases number: ");

  for (let i = 0; i < +testCasesNum; i++) {
    console.log(await hardVersion());
  }

  rl.close();
};

main();
