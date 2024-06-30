const snail = (array) => {
  const middle = array
    .slice(1, array.length - 1)
    .map((row) => row.slice(1, row.length - 1));

  return [
    array[0],
    array.slice(1, array.length - 1).map((row) => row[row.length - 1]),
    array.length > 1 ? array[array.length - 1].reverse() : [],
    array
      .slice(1, array.length - 1)
      .map((row) => row[0])
      .reverse(),
    middle.length  ? snail(middle) : [],
  ].flat();
};

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
