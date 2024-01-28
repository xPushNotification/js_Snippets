let arrayOfClasses = {};

arrayOfClasses["MyClass"] = class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi, " + this.name + "!");
  }
};

let myObject = new arrayOfClasses["MyClass"]("Alice");
myObject.sayHi();
