var addOne = require("./addOne");
console.log(addOne.plusOne([1, 2, 3]));
console.log(addOne.plusOne([1, 2, 9]));
console.log(addOne.plusOne([9, 9, 9]));
console.log(addOne.plusOne([0, 1 , 9, 9]));
console.log(addOne.plusOne([ 3, 0, 6, 4, 0 ]));

console.log(addOne.plusOne([ 0, 0, 4, 4, 6, 0, 9, 6, 5, 1 ]));