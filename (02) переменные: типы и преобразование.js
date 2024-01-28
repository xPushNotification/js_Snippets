
//----------
// переменные: типы:
//----------

r =
[
 typeof undefined,         // undefined
 typeof 0,                 // number
 typeof "string",          // string
 typeof Math,              // object
 typeof alert,             // function

 typeof [],                // object
 Array.isArray([1, 2, 3]), // true
];

// преобразования:
str = "123";
num = Number(str);
n = 1+'2';          // "12"
t = Boolean(" ");   // true
t = Boolean("");    // false

oranges_str = "5";
oranges_num = +oranges_str;  // интерпретировать числом
