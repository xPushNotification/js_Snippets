
//----------
// объекты:
//----------

let user;
user = new Object();
user = {};

user =
{
    name: "John",
    age: 30,
};

t = user.name;
t = user.age;

delete user.age;

user["like birds"] = true;
delete user["like birds"];

let key = "key name";
user =
{
    [key]:5,
    [key+"something"]:10,

    test2: function test2(){console.log(111);},
    test: function test()
    {
        console.log("test"); 
        console.log(this);        // объект видит себя
        console.log(this.key);    // однако обратиться к себе не может
        this.test2();             // но при этом функция сработает
    },
    thisObject:this,
};
user.test();
console.log(user.thisObject);     // пустой closure {}

// простой объект можно использовать для передачи параметров в функцию:
function test(pparams){console.log(pparams);}
test({["key1"]:111, ["key2"]:222});
