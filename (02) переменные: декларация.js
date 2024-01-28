
//----------
// переменные: декларация:
//----------

let user = "John", age = 25, message = "Hello";

// в js невозможно задать & на примитивный тип
// let a = &b;
// однако все, что выше примитива - всегда и так будет являться ссылкою
a = [];
b = a;    // копия по ссылке!

$ = 1;
_ = 2;

a = b = c = 2 + 2;
c = 3 - (a = b + 1);

cond = (year == 2015);
// eq:
cond = false; if(year == 2015) cond = true;

// строки всегда константные:
str = "the string";
str[0] = "s";             // ошибка

strOne = "the string";
strTwo = strOne;      // копия по значению

strThr = new String("the value");
strFou = strThr;      // копия все равно по значению

