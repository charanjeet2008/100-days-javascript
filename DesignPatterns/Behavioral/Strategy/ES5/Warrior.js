
const RunBehavior = require("./RunBehavior");
const Interface = require("./Interface");
const WeaponBehavior = require("./WeaponBehavior");

/**
 * Parent class for Warriors
 * It uses Weapons via Strategy Pattern
 * @param type
 * @returns {{walk: walk, talk: talk, fight: fight, setName: setName, setWeapon: setWeapon}}
 * @constructor
 */
let Warrior = function(type) {
    this.type = type;

    //Default Weapon
    this.weapon = new RunBehavior();
    Interface.ensureImplements(this.weapon, WeaponBehavior);

    function setName(name) {
        this.name = name;
    }

    function walk() {
        console.log("Walking...");
    }

    function talk() {
        console.log("Talking...");
    }

    function fight() {
        console.log("Fighting...");
        this.weapon.useWeapon();
    }

    //Dynamically change Weapon
    function setWeapon(weapon) {
        Interface.ensureImplements(weapon, WeaponBehavior);
        this.weapon = weapon;
    }

    return {
        walk: walk,
        talk: talk,
        fight: fight,
        setName: setName,
        setWeapon: setWeapon
    }
}
// let me = new Warrior("charan");
// me.setName("charan");
// console.log(me.name);
// me.fight();
module.exports = Warrior;
