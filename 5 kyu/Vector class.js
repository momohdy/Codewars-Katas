// var Vector = function (components) {

// };

// console.log("MANGOOOO");

class Vector {
  constructor(array) {
    this.array = array.slice(); // Create a copy of the array to avoid modifying the original array.
  }

  isCompatible(object) {
    return this.array.length === object.array.length;
  }

  add(object) {
    if (!this.isCompatible(object)) {
      throw new Error("Add not Working , Is Not Compatible!!");
    }

    // for (let i = 0; i < this.array.length; i++) {
    //   this.array[i] += object.array[i];
    // }

    const result = this.array.map(
      (value, index) => value + object.array[index]
    );

    return new Vector(result);
  }

  subtract(object) {
    if (!this.isCompatible(object)) {
      throw new Error("Subtract not Working ,Is Not Compatible!!");
    }

    const resultArray = this.array.map(
      (value, index) => value - object.array[index]
    );

    return new Vector(resultArray);
  }

  dot(object) {
    if (!this.isCompatible(object)) {
      throw new Error("Dot-Product not Working ,Is Not Compatible!!");
    }

    return this.array.reduce(
      (acc, value, index) => acc + value * object.array[index],
      0
    );
  }

  norm() {
    const squaredSum = this.array.reduce(
      (acc, value) => acc + value * value,
      0
    );
    return Math.sqrt(squaredSum);
  }

  equals(object) {
    return JSON.stringify(this.array) === JSON.stringify(object.array);
  }

  toString() {
    return `(${this.array.join(",")})`;
  }
}

var a = new Vector([1, 2]);
var b = new Vector([3, 4]);

// console.log(a.add(b));
// console.log(new Vector([4,6]));
console.log(a.add(b).equals(new Vector([4, 6])));
// console.log(a.norm());
