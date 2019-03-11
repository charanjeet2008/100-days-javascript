const Warrior = require("./Warrior");
const SwordBehavior = require("./SwordBehavior");

let King = function() {
    //Inheritance Part 1: Invoke Parent's constructor mode to initialise this
    Warrior.call(this, "king");

}
//Inheritance Part 2: Attach Parent as a prototype. It cannot be written inside the class with "this"
King.prototype = new Warrior("king")
var me = new King();
me.setName("Charan")
console.log(me.name);
me.walk();
me.fight();
me.setWeapon(new SwordBehavior());
me.fight();