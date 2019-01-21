//*******************************************************//
// Prototypal Inheritance With The DOM-To-Object Bridge Pattern
//*******************************************************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [ES2015+] We used new object method declaration

//********************** Snippet 1 **********************//
/*!
 * jQuery prototypal inheritance plugin boilerplate
 * Author: Alex Sexton, Scott Gonzalez
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */

// myObject - an object representing a concept we wish to model
// (e.g. a car)
const myObject = {
    init(options, elem) {
      // Mix in the passed-in options with the default options
      this.options = $.extend({}, this.options, options);

      // Save the element reference, both as a jQuery
      // reference and a normal reference
      this.elem = elem;
      this.$elem = $(elem);

      // Build the DOM's initial structure
      this._build();

      // return this so that we can chain and use the bridge with less code.
      return this;
    },
    options: {
      name: 'No name',
    },
    _build() {
      //this.$elem.html( "<h1>"+this.options.name+"</h1>" );
    },
    myMethod(msg) {
      // We have direct access to the associated and cached
      // jQuery element
      // this.$elem.append( "<p>"+msg+"</p>" );
    },
  };

  // Object.create support test, and fallback for browsers without it
  if (typeof Object.create !== 'function') {
    // [ES2015+] Parentheses are optional when there is only one parameter
    Object.create = o => {
      function F() {}
      F.prototype = o;
      return new F();
    };
  }

  // Create a plugin based on a defined object
  $.plugin = (name, object) => {
    $.fn[name] = function(options) {
      return this.each(function() {
        if (!$.data(this, name)) {
          $.data(this, name, Object.create(object).init(options, this));
        }
      });
    };
  };

//********************** Snippet 2 **********************//
$.plugin('myobj', myObject);

$('#elem').myobj({ name: 'John' });

const collection = $('#elem').data('myobj');
collection.myMethod('I am a method');

