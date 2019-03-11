function SwordBehavior() {

    function sword() {
        console.log("Now face the Sword!");
    }

    //implements WeaponBehavior
    return {
        "useWeapon": sword
    }
}
module.exports = SwordBehavior;