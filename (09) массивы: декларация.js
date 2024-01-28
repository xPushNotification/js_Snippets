
//----------
// массивы: декларация:
//----------

// массив это в том числе и Объект,
// однако:
// там где нужны ключи - используется именно объект
// массив - это про то что есть перечисление БЕЗ КЛЮЧЕЙ
// там где нужны и значения без ключей и ключи - используется комбинация:

// тут проблемы:
const o_matrix =
{
    "key1":["value1","value2",],
    "key2":["value3",],
    //"simple value",       // error: no key in object found
    0:"simple value",
};

// а тут все ок:
arr =      // - здесь ключи
{
 key1: 111,
 key2: 222,
 data: [],     // - а здесь одномерный массив
};

arr.data.push("100");
arr.data.length;
arr["new key"] = [];

for(key in arr) {arr[key];}

// ------

// если нужно передать параметры
// то очевидно для аналога с пхп - можно использовать и объект

if(1)
{
 p =
 {
  "one": 111,
  "two": 222,
 };
 callf(p);

 console.log(p["result"]);

 callf({"one":1111, "two":2222});
}

function callf(pparams)
{
 if(pparams["one"] != undefined) console.log(pparams["one"]);
 if(pparams["two"] != undefined) console.log(pparams["two"]);

 console.log(Object.keys(pparams).length);

 pparams["result"] = 555;
}

// -----
// .length не работает с именованными ключами
// (они добавляются в сущность Object, а не Array):

arr = [];
arr["one"] = 111;
arr["two"] = 222;
arr["thr"] = 333;

for(key of Object.keys(arr))
{
    console.log(key);
    console.log(arr[key]);
}

console.log(arr.length);                // 0
console.log(Object.keys(arr).length);   // 3

// -----

arr = [];
arr = new Array();
arr = ["one","two","thr",];
arr = [0,function(){}, {one:"one"},];
console.log(arr.length);
arr[1]();

arr =
[
    [0,0,1],
    [0,1,0],
];

t = typeof[];   // object
t = Array.isArray([]);  // true

// нет встроенного механизма преобразования из массива в объекты:
// и она не нужна при наличии: Object.keys(obj).length + obj["key"])
t = Array.from({"one":1, "two":2});       // doesn't work
t = Object.entries({"one":1, "two":2,});  // ["one",1], ["two",2]

const matrix = [];
matrix.key1 =
[
  'value1',
  'value2',
];
matrix.key2 =
[
  'value3',
];
matrix.push("simple value");

// это итерация от объекта, а не от Array:
for(key in matrix) {console.log(key);}  // 0,key1,key2

// а вот полный аналог функциональности пхп - где объект
// представляется полностью как объект:
p =
{
    one:111,
    two:222,
    thr:333,
};
// единственная проблема нельзя сделать [] добавление:
// p[] = 444; -- требуется индекс (но его можно генерировать)
p["four"] = 444;
// только встанут они в первые позиции перед буквами
ix = 0;
p[ix++] = 555;
p[ix++] = 666;
// а вот и аналог []
p[Object.keys(p).length] = 777; // интерактив
p[Object.keys(p).length] = 888;

Object.keys(p).forEach(
    //function(key)
    (key)=>
    {
        console.log(p[key]);
    }
);

for(key in p)   // -- "of" is for the iterables only
{
 console.log(p[key]);
}

// -------------------
// массивы в js НЕ МОГУТ нормально работать с конверсией в JSON
// поэтому в основном лучше использовать объекты
// внутри которых одномерные массивы
// (здесь length и переборы не нужны)

// проблемы:
arr = [];
arr["key"] = 111;        // теряется!
arr.push(222);
console.log(arr);        // [222, key:123]
JSON.stringify(arr);     // [222]

// все отлично:
arr =
{
    key1: 111,
    key2: 222,
    "with spaces": 333,
    key3:
    [
     333,444,555,
    ]
};
console.log(JSON.stringify(arr));

// доступ к объектам возможен как к массивам:
// (что при цифровых индексах позволяет написать for(..))
arr["key3"] = 333;

//
// ну или можно уйти полностью в объекты:
p = {one:111,two:222,};
p["thr"] = 333;
p[Object.keys(p).length+1] = 444;
json = JSON.stringify(p);
console.log(json);               // -- все ключи и значения на месте

delete p["thr"];                 // -- удаление ключа (фактически pop)
json = JSON.stringify(p);
console.log(json);

// ------------

// если объект использует только индексы (то есть все ключи числовые)
// используется Object.keys(obj).length - для манипуляций и
// эмуляции push/pop (так лучше не делать - все порушит любой ключ-строка):
p = {};
// push:
p[Object.keys(p).length] = 111;
p[Object.keys(p).length] = 222;
p[Object.keys(p).length] = 333;
console.log(p);
// циклы по ключам тоже будут работать:
for(var i = 0; i<Object.keys(p).length; i++){console.log(p[i]);}
// как и stringify:
console.log(JSON.stringify(p));
// pop:
delete p[Object.keys(p).length-1];
console.log(p);
delete p[Object.keys(p).length-1];
console.log(p);
