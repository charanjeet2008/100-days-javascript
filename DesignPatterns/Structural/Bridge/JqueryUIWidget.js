/**
 * This bridge basically serves as a middle layer between a JavaScript object that is created using $.widget and the jQuery core API,
 * providing a more built-in solution to achieving object-based plugin definition.
 * Effectively, we’re able to create stateful plugins using a custom constructor.
 */

/*
 * Both public and private methods are handled as one would expect in classical OOP (i.e. public methods are exposed,
 * while calls to private methods are not possible). Automatic protection against multiple initializations.
 * Automatic generation of instances of a passed object, and storage of them within the selection’s internal $.data cache.
 * Options can be altered post-initialization.
 */

/*!
 * jQuery UI Widget factory "bridge" plugin boilerplate
 * Author: @erichynds
 * Further changes, additional comments: @addyosmani
 * Licensed under the MIT license
 */

// a "WidgetName" object constructor
// required: this must accept two arguments,
// options: an object of configuration options
// element: the DOM element the instance was created on
class WidgetName {
    constructor(options, element) {
        this.name = 'myWidgetName';
        this.options = options;
        this.element = element;
        this._init();
    }

    // the "WidgetName" prototype
    // _create will automatically run the first time this
    // widget is called
    _create() {
        // creation code
    }

    // required: initialization logic for the plugin goes into _init
    // This fires when our instance is first created and when
    // attempting to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init() {
        // init code
    }

    // required: objects to be used with the bridge must contain an
    // "option". Post-initialization, the logic for changing options
    // goes here.
    option(key, value) {
        // optional: get/change options post initialization
        // ignore if you don't require them.

        // signature: $("#foo").bar({ cool:false });
        if ($.isPlainObject(key)) {
            this.options = $.extend(true, this.options, key);

            // signature: $( "#foo" ).option( "cool" ); - getter
        } else if (key && typeof value === 'undefined') {
            return this.options[key];

            // signature: $( "#foo" ).bar("option", "baz", false );
        } else {
            this.options[key] = value;
        }

        // required: option must return the current instance.
        // When re-initializing an instance on elements, option
        // is called first and is then chained to the _init method.
        return this;
    }

    // notice no underscore is used for public methods
    publicFunction() {
        console.log('public function');
    }

    // underscores are used for private methods
    _privateFunction() {
        console.log('private function');
    }
}

//********************** Snippet 2 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// connect the widget obj to jQuery's API under the "foo" namespace
$.widget.bridge('foo', WidgetName);

// create an instance of the widget for use
const instance = $('#foo').foo({
    baz: true,
});

// our widget instance exists in the elem's data
// Outputs: #elem
console.log(instance.data('foo').element);

// bridge allows us to call public methods
// Outputs: "public method"
instance.foo('publicFunction');

// bridge prevents calls to internal methods
instance.foo('_privateFunction');