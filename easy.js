const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

const easyVersion = async () => {
  const machineRequirements = await askQuestion("Enter machine requirements: ");
  const [r, c, d] = machineRequirements.split(" ").map(Number);

  const maxCapacities = await askQuestion("Enter maximum capacity: ");
  const [nR, nC, nD] = maxCapacities.split(" ").map(Number);

  let maxMachines = Math.min(Math.floor(nR / r), Math.floor(nC / c), Math.floor(nD / d))

  return maxMachines ;
};

export const main = async () => {
  const testCasesNum = await askQuestion("Please enter test cases number: ");
  
  for (let i = 0; i < +testCasesNum; i++) {
    console.log(await easyVersion());
  }

  rl.close();
};

main();
