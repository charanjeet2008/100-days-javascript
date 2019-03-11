# Structural Patterns
Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do.
Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.
## Arrows in UML
![alt text](https://upload.wikimedia.org/wikipedia/commons/0/0b/Uml_class_relation_arrows_en.svg.png)

## 1. Adapter
Converts the interface of a class into another interface client expect. Lets classes work together that couldn't otherwise because of incompatible interfaces.
Also called Wrapper or Translator.

Adapters basically allow objects or classes to function together which normally couldn't due to their incompatible interfaces. The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.
![alt text](https://upload.wikimedia.org/wikipedia/commons/e/e5/W3sDesign_Adapter_Design_Pattern_UML.jpg)
![alt text](https://dotnettricks.blob.core.windows.net/img/designpatterns/adapter.png)
https://en.wikipedia.org/wiki/Adapter_pattern
https://sourcemaking.com/design_patterns/adapter

## 2. Bridge
Decouple an abstraction from its implementation so that the two can vary independently.
![alt text](https://upload.wikimedia.org/wikipedia/commons/f/fd/W3sDesign_Bridge_Design_Pattern_UML.jpg)
![alt text](https://en.wikipedia.org/wiki/File:Bridge_UML_class_diagram.svg)
https://en.wikipedia.org/wiki/Bridge_pattern
https://sourcemaking.com/design_patterns/bridge

## 3. Composite
Compose objects into tree structures to represent part-whole hierarchies. Lets clients treat individual objects an compositions of objects uniformly.
![alt text](https://upload.wikimedia.org/wikipedia/commons/6/65/W3sDesign_Composite_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/39/W3sDesign_Composite_Design_Pattern_Type_Safety_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Composite_UML_class_diagram_%28fixed%29.svg/600px-Composite_UML_class_diagram_%28fixed%29.svg.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/a/a9/Composite_pattern_in_LePUS3.png)
https://lh3.googleusercontent.com/1jBXTzkUIdueAa5dpgeghlegjcPN281NmsfAfZ2HCviTLd8PrSe93fm3DKOTDBydXC6ckg=s170https://en.wikipedia.org/wiki/Composite_pattern
https://sourcemaking.com/design_patterns/composite

The Composite Pattern describes a group of objects that can be treated in the same way a single instance of an object may be.
This allows us to treat both individual objects and compositions in a uniform manner, meaning that the same behavior will be applied regardless of whether we're working with one item or a thousand.

## 4. Decorator
Attach additional responsibilities to an object dynamically. Provide a flexible alternative to sub-classing for extending functionality.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Decorator_UML_class_diagram.svg/400px-Decorator_UML_class_diagram.svg.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/UML2_Decorator_Pattern.png/400px-UML2_Decorator_Pattern.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/8/83/W3sDesign_Decorator_Design_Pattern_UML.jpg)
https://lh3.googleusercontent.com/1jBXTzkUIdueAa5dpgeghlegjcPN281NmsfAfZ2HCviTLd8PrSe93fm3DKOTDBydXC6ckg=s170
https://en.wikipedia.org/wiki/Decorator_pattern

https://sourcemaking.com/design_patterns/decorator

The idea is that rather than sub-classing, we add (decorate) properties or methods to a base object so it's a little more streamlined.

There are however drawbacks that we should be aware of when implementing the pattern. 
If poorly managed, it can significantly complicate our application architecture as it introduces many small, but similar objects into our namespace. 
The concern here is that in addition to becoming hard to manage, other developers unfamiliar with the pattern may have a hard time grasping why it's being used.
Sufficient commenting or pattern research should assist with the latter, however as long as we keep a handle on how widespread we use the decorator in our applications we should be fine on both counts.


## 5. Facade
Provides a unified interface to a set of interfaces in a subsystems. Defines a high-level interface that makes the subsystem easier to user.

A Facade is used when an easier or simpler interface to an underlying object is desired. 
Alternatively, an adapter can be used when the wrapper must respect a particular interface and must support polymorphic behavior. 
  

![alt text](https://upload.wikimedia.org/wikipedia/commons/9/96/W3sDesign_Facade_Design_Pattern_UML.jpg)
https://en.wikipedia.org/wiki/Facade_pattern
https://sourcemaking.com/design_patterns/facade

To build on what we've learned, the Facade pattern both simplifies the interface of a class and it also decouples the class from the code that utilizes it. 
This gives us the ability to indirectly interact with subsystems in a way that can sometimes be less prone to error than accessing the subsystem directly. 
A Facade's advantages include ease of use and often a small size-footprint in implementing the pattern.

## 6. Flyweight
Use sharing to support large number of fine grained objects efficiently.
![alt text](https://upload.wikimedia.org/wikipedia/commons/4/4e/W3sDesign_Flyweight_Design_Pattern_UML.jpg)
![alt text](https://c2.staticflickr.com/8/7205/6804688716_bb686fd4c0_b.jpg)
https://refactoring.guru/design-patterns/flyweight
https://sourcemaking.com/design_patterns/flyweight
https://en.wikipedia.org/wiki/Flyweight_pattern

The Flyweight pattern is a classical structural solution for optimizing code that is repetitive, slow and inefficiently shares data. It aims to minimize the use of memory in an application by sharing as much data as possible with related objects (e.g application configuration, state and so on).

Flyweight: corresponds to an interface through which flyweights are able to receive and act on extrinsic states

Concrete Flyweight: actually implements the Flyweight interface and stores intrinsic state. 
Concrete Flyweights need to be sharable and capable of manipulating state that is extrinsic

Flyweight Factory: manages flyweight objects and creates them too. 
It makes sure that our flyweights are shared and manages them as a group of objects which can be queried if we require individual instances. 
If an object has been already created in the group it returns it, otherwise it adds a new object to the pool and returns it.


## 7. Proxy
Provides a surrogate or placeholder for another object to control access to it.
![alt text](https://upload.wikimedia.org/wikipedia/commons/6/6e/W3sDesign_Proxy_Design_Pattern_UML.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Proxy_pattern_diagram.svg/439px-Proxy_pattern_diagram.svg.png)
https://en.wikipedia.org/wiki/Proxy_pattern
https://sourcemaking.com/design_patterns/proxy

achieved via apply function of javascript

## 8. Module
Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.
https://en.wikipedia.org/wiki/Module_pattern

In JavaScript, there are several options for implementing modules. These include:
- The Module pattern
- Object literal notation
- AMD modules
- CommonJS modules ECMAScript Harmony modules

##9. Marker
Empty interface to associate metadata with a class.
https://en.wikipedia.org/wiki/Marker_interface_pattern

##10. Private Class Data
https://sourcemaking.com/design_patterns/private_class_data