
//----------
// closures: недоклассы / prototype:
//----------

let count_1;
let count_2;

// closure это попытка изолировать переменные от внешнего окружения
// созданием области {} которая действует как класс

// (а)
function closure()
{
    let counter = 0;               // вообще можно смотреть как на статическую переменную
    return function()
    {
        counter++;
    };
}
count_1 = closure();
count_2 = closure();

count_1(); count_2();   // 0,0
count_1();              // 1


// (б)
function closure2()
{
    this.counter = 0;
    this.count = function(){return this.counter++;};
}
count_1 = new closure2();
count_2 = new closure2();

count_1.count(); count_2.count();
count_1.count();
// (в)
(function(){
    let message = "hello";
    console.log(message);
})();

// (в)
// помимо этого в каждой функции есть объект prototype который 
// разделяется всеми функцями этого типа, можно сказать - что 
// он представлят объект самого класса:
function UserClass()
{
    this.one = "переменная недо-класса";
}
UserClass.prototype.staticVariable = "статическая переменная класса";
UserClass.prototype.doSomething = function(){console.log(this.one);};

let user = new UserClass();

console.log(user.staticVariable);   // переменная из прототипа стала переменной класса
user.doSomething();                 // функция из прототипа стала функцией класса
                                    // можно получить доступ и без объекта:
console.log(UserClass.prototype.staticVariable);

// -----------                   класс выглядит адекватнее:
class Closure3
{
    counter = 0;
    constructor() {this.counter = 1;}
    f() {return this.counter++;}
}
count_1 = new Closure3;
count_2 = new Closure3;

console.log(count_1.f());
console.log(count_2.f());
// ------------
