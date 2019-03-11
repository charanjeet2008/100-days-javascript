// A skeleton carAnimator constructor
function CarAnimator(){
    this.moveLeft = function(){
        console.log( "move left" );
    };
}

// A skeleton personAnimator constructor
function PersonAnimator(){
    this.moveRandomly = function(){ /*..*/ };
}

// Extend both constructors with our Mixin
_.extend( CarAnimator.prototype, myMixins );
_.extend( PersonAnimator.prototype, myMixins );

// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!