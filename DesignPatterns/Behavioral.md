## Behavioral Patterns

## 1. Chain of Responsibility
Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

![alt text](https://upload.wikimedia.org/wikipedia/commons/6/6a/W3sDesign_Chain_of_Responsibility_Design_Pattern_UML.jpg)
![alt text](https://dzone.com/storage/rc-covers/10621-thumb.png)
https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern
https://sourcemaking.com/design_patterns/chain_of_responsibility
https://sourcemaking.com/design_patterns/chain_of_responsibility
https://refactoring.guru/design-patterns/chain-of-responsibility


## 2. Command 
Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
![alt text](https://upload.wikimedia.org/wikipedia/commons/c/c8/W3sDesign_Command_Design_Pattern_UML.jpg)
![alt text](https://dzone.com/storage/rc-covers/10610-thumb.png)
https://en.wikipedia.org/wiki/Command_pattern
https://sourcemaking.com/design_patterns/command
https://refactoring.guru/design-patterns/command


## 3. Interpreter
Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
https://en.wikipedia.org/wiki/Interpreter_pattern
![alt text](https://c1.staticflickr.com/8/7181/6950801683_7c9c5ea256_b.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/33/W3sDesign_Interpreter_Design_Pattern_UML.jpg)
https://sourcemaking.com/design_patterns/interpreter


## 4. Iterator 
Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
![alt text](https://upload.wikimedia.org/wikipedia/commons/c/c5/W3sDesign_Iterator_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Iterator_UML_class_diagram.svg/500px-Iterator_UML_class_diagram.svg.png)
![alt text](https://c1.staticflickr.com/8/7185/6804689186_2aaba63078_b.jpg)
https://en.wikipedia.org/wiki/Iterator_pattern
https://sourcemaking.com/design_patterns/iterator
https://refactoring.guru/design-patterns/iterator


## 5. Mediator
Define an object that encapsulates how a set of objects interact. Promotes loose coupling by keeping objects from referring to each other explicitly and it lets you vary their interactions independently.

https://sourcemaking.com/design_patterns/mediator
https://refactoring.guru/design-patterns/mediator

## 6. Memento
Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored to this state later.
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/38/W3sDesign_Memento_Design_Pattern_UML.jpg)
![alt text](https://dzone.com/storage/rc-covers/10614-thumb.png)

https://en.wikipedia.org/wiki/Memento_pattern
https://sourcemaking.com/design_patterns/memento
https://refactoring.guru/design-patterns/memento

## 7. Observer or Publish/Subscribe
Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
![alt text](https://upload.wikimedia.org/wikipedia/commons/0/01/W3sDesign_Observer_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Observer_w_update.svg/500px-Observer_w_update.svg.png)
https://dzone.com/storage/rc-covers/10615-thumb.png)
https://sourcemaking.com/design_patterns/observer
https://refactoring.guru/design-patterns/observer 

## 8. State
Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/W3sDesign_State_Design_Pattern_UML.jpg/220px-W3sDesign_State_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/State_Design_Pattern_UML_Class_Diagram.svg/400px-State_Design_Pattern_UML_Class_Diagram.svg.png)
![alt text](https://dzone.com/storage/rc-covers/10616-thumb.png)
https://sourcemaking.com/design_patterns/state
https://refactoring.guru/design-patterns/state


## 9. Strategy
Define a family of algoorithms, encapsulate each one, and make them interchangeable. Lets the algorithm vary indenpendently from clients that use it.
![alt text](https://upload.wikimedia.org/wikipedia/commons/4/45/W3sDesign_Strategy_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/39/Strategy_Pattern_in_UML.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Strategy_pattern_in_LePUS3.gif/400px-Strategy_pattern_in_LePUS3.gif)
https://en.wikipedia.org/wiki/Strategy_pattern
https://sourcemaking.com/design_patterns/strategy
https://refactoring.guru/design-patterns/strategy

## 10. Template Method
Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Lets subclasses redefine certain steps of an algorithm without changing algorithm's structure.
![alt text](https://upload.wikimedia.org/wikipedia/commons/2/2a/W3sDesign_Template_Method_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Template_Method_UML.svg/300px-Template_Method_UML.svg.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/2/2a/Template_Method_pattern_in_LePUS3.gif)
![alt text](https://dzone.com/storage/rc-covers/10618-thumb.png)
https://en.wikipedia.org/wiki/Template_method_pattern
https://sourcemaking.com/design_patterns/template_method
https://refactoring.guru/design-patterns/template-method

## 11. Visitor
Represent an operation to be performed on the elements of an object structure. Lets you define a new operation without changing the classes of the elements on which it performs.
It is a way of separating an algorithm from an object structure on which it operates.
![alt text](https://upload.wikimedia.org/wikipedia/commons/0/00/W3sDesign_Visitor_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Visitor_design_pattern.svg/430px-Visitor_design_pattern.svg.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/d/d8/Visitor_pattern_class_diagram_in_LePUS3.gif)
![alt text](https://dzone.com/storage/rc-covers/10619-thumb.png)
https://sourcemaking.com/design_patterns/visitor
https://refactoring.guru/design-patterns/visitor
 

## Null Object
Avoid null references by providing a default object.
![alt text](https://sourcemaking.com/files/v2/content/patterns/Null_Object2.png)
https://en.wikipedia.org/wiki/Null_object_pattern
https://sourcemaking.com/design_patterns/null_object


## Servant or Helper or Utility
Define common functionality for a group of classes. Generally has no objects hence they have all static methods that act upon different kinds of class objects.
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/DesignPatternServantFigure1.png/220px-DesignPatternServantFigure1.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/DesignPatternServantFigure2.png/220px-DesignPatternServantFigure2.png)
https://en.wikipedia.org/wiki/Servant_(design_pattern)
  

## Specification
Recombinable business logic in a boolean fashion. Considered as an Anti-pattern
https://en.wikipedia.org/wiki/Specification_pattern