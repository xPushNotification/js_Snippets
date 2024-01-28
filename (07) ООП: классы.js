
//----------
// классы:
//----------

class Base
{
    constructor(name){ this.name = name; this.bb = "bb"; }
    test(){ console.log("Base"); }

}//c:Base

class MyClass extends Base
{

    _protProperty1 = 0;                 // this class/ its children
    #protProperty2 = 1;                 // this class
    nonprotProperty3 = 3;
    static publisher = "publisher";     // MyClass.publisher

    constructor(name)   // деструкторов у классов js просто нет
    {
        super(name);
        this.name = name;
    }

    static staticMethod(){ console.log(111); }
    test(){ super.test(); console.log("MyClass"); }

    // error: in the constructor
    // set name(x){ this.name = x; }

    // ok:
    get protProperty1(){ return this._protProperty1; }
    set protProperty2(x){ this._protProperty2 = x; }

}//c:MyClass

let obj = new MyClass("object");
obj.test();