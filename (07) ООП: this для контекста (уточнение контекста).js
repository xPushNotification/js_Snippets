
//----------
// ооп для контекста:
//----------

// operator "this" показывает не объект - а контекст - к которому относится,
// контекстом может быть и функция и класс и объект и окружение (window)

let user =
{
    name:"John", age:30,
};

user.sayHi = function()
{
    alert(this.name);
};

let ff = user.sayHi;        // lost "this"

let admin =
{
    name:"admin",
};

admin.sayHi = ff;           // get "this"

// чтобы в функциях небыло обломов - туда желательно передавать текущий this
// используемый для исполнения
// или уж использовать объекты - которые сами с собою все что нужно притащут

function doSomething(one, two, context = this)
{
 console.log(this);
 console.log(context);
 return one + two;
}
doSomething(1,2);

function doSomethingElse()
{
 let obj = {};
 doSomething(1,2,obj);
}
doSomethingElse();

