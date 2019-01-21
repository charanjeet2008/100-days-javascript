const _private = {
    i: 5,
    get() {
        console.log(`current value:${this.i}`);
    },
    set(val) {
        this.i = val;
    },
    run() {
        console.log('running');
    },
    jump() {
        console.log('jumping');
    },
};

// [ES2015+] We used the destructuring assignment syntax that makes it possible to unpack values from data structures into distinct variables.
const module = {
    facade({ val, run }) {
        _private.set(val);
        _private.get();
        if (run) {
            _private.run();
        }
    },
};
// [ES2015+] Default export module, without name
export default module;

// [ES2015+] The import statement is used to import bindings which are exported by another module.
import module from './module';
// Outputs: "current value: 10" and "running"
module.facade({
    run: true,
    val: 10,
