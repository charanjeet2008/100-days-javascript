const LRUCache = require("./LRUCache");
const LRU = new LRUCache(10);
//LRU.get(3);

LRU.set(2,111);
 console.log("output", LRU.get(2));
// LRU.set(2,111);
// LRU.set(3,111);
// LRU.set(4,111);
// LRU.set(5,111);
// //todo: do unit testing
// console.log("output", LRU.get(1));
// console.log("output", LRU.get(2));
// console.log("output", LRU.get(3));
// console.log("output", LRU.get(4));
// console.log("output", LRU.get(5));
// console.log("output", LRU.get(1));