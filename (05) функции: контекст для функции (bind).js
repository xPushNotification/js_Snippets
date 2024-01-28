
//----------
// задание контекста для функции:
//----------

let user =
{
    firstName: "Joe",
    sayHi(){ console.log(this.firstName); },
};

// через обетку:
setTimeout
(
    function()
    {
       user.sayHi();
    },
    1000
);

// через стрелку:
setTimeout
(
    ()=>user.sayHi(),
    1000
);

// прямым указанием объекта к которому относиться:
let fff = user.sayHi.bind(user);
setTimeout(fff, 1000);

