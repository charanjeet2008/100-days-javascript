#Creational Design Patterns

Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process.
Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

## Arrows in UML
![alt text](https://upload.wikimedia.org/wikipedia/commons/0/0b/Uml_class_relation_arrows_en.svg.png)


##1. Singleton
Ensures that a class has a single instance, and provides a global point of access to it.

https://cdn.crunchify.com/wp-content/uploads/2013/02/Singleton-Pattern-Java.png

![alt text](https://cdn.crunchify.com/wp-content/uploads/2013/02/Singleton-Pattern-Java.png)

https://en.wikipedia.org/wiki/Singleton_pattern
https://sourcemaking.com/design_patterns/singleton

Difference from Static Object or Class?
Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be available during initialization time. They don't provide a way for code that is unaware of a previous reference to them to easily retrieve them. This is because it is neither the object or "class" that's returned by a Singleton, it's a structure. Think of how closured variables aren't actually closures - the function scope that provides the closure is the closure.
In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase. Singletons can be more difficult to test due to issues ranging from hidden dependencies, the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.

Further Reading:
https://www.ibm.com/developerworks/webservices/library/co-single/index.html
http://misko.hevery.com/2008/10/21/dependency-injection-myth-reference-passing/

##2. Factory Method
Define an interface for creating an object, but let subclasses decide which class to instantiate. It lets a class defer instantiation to subclasses.

![alt text](https://dotnettricks.blob.core.windows.net/img/designpatterns/factory.png)
https://i.stack.imgur.com/2sR30.png
https://en.wikipedia.org/wiki/Factory_method_pattern
https://sourcemaking.com/design_patterns/factory_method

Unless providing an interface for object creation is a design goal for the library or framework we are writing, I would suggest sticking to explicit constructors to avoid the unnecessary overhead.

Due to the fact that the process of object creation is effectively abstracted behind an interface, this can also introduce problems with unit testing depending on just how complex this process

##3 Abstract Factory
Provides an interface for creating families of related or dependent objects without specifying their concrete class.
![alt text](https://i.stack.imgur.com/YJD3X.png)
https://sourcemaking.com/design_patterns/abstract_factory
https://en.wikipedia.org/wiki/Abstract_factory_pattern
https://cdncontribute.geeksforgeeks.org/wp-content/uploads/AbstractFactoryPattern-2.png

##4 Prototype 
Specify the kinds of objects to create using a prototypical inheritance, and create new objects by copying this prototype.
![alt text](https://dzone.com/storage/rc-covers/10630-thumb.png)
https://refactoring.guru/images/patterns/diagrams/prototype/structure.png

https://refactoring.guru/design-patterns/prototype
https://en.wikipedia.org/wiki/Prototype_pattern
https://sourcemaking.com/design_patterns/prototype

##5 Builder
Separates the construction of a complex object from its representing so that same construction process can create different representations.
![alt text](https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg)
![alt text](https://refactoring.guru/images/patterns/diagrams/builder/example.png)
https://refactoring.guru/design-patterns/builder
https://en.wikipedia.org/wiki/Builder_pattern
https://sourcemaking.com/design_patterns/builder
 
 
Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly.

##6 Object Pool
Uses a set of initialized objects kept ready to use, a pool, rather than allocating and destroying them on demand
![alt text](https://sourcemaking.com/files/v2/content/patterns/Object_pool1.png)
https://en.wikipedia.org/wiki/Object_pool_pattern
https://sourcemaking.com/design_patterns/object_pool
 
 
##7 Dependency Injection
A class accepts the object it requires from an injector instead of creating the objects directly.

https://en.wikipedia.org/wiki/Dependency_injection

##8 Lazy Initialization
Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.
https://en.wikipedia.org/wiki/Lazy_initialization

##9 Multition
Ensure a class has only named instances, and provides a global point of access to them.

