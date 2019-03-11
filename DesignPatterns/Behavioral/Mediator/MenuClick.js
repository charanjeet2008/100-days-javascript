const MenuItem = MyFrameworkView.extend({
    events: {
        'click .thatThing': 'clickedIt',
    },

    clickedIt(e) {
        e.preventDefault();

        // assume this triggers "menu:click:foo"
        MyFramework.trigger(`menu:click:${this.model.get('name')}`);
    },
});

// ... somewhere else in the app

class MyWorkflow {
    constructor() {
        MyFramework.on('menu:click:foo', this.doStuff, this);
    }

    // [ES2015+] The static keyword defines a static method for a class.
    // [ES2015+] Static methods are called without instantiating their class and cannot be called through a class instance.
    // [ES2015+] Static methods are often used to create utility functions for an application.
    static doStuff() {
        // instantiate multiple objects here.
        // set up event handlers for those objects.
        // coordinate all of the objects into a meaningful workflow.
    }
}