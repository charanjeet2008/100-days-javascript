function RunBehavior() {
    function run() {
        console.log("I am Running Away!");
    }

    //implements WeaponBehavior
    return {
        "useWeapon": run
    }
}
module.exports = RunBehavior;