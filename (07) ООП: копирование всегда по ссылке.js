
//----------
// копирование объектов всегда по ссылке:
//----------

let message = "Hello";
let phrase = message;       // by value

let user = {name:1};
let admin = user;           // by ref

let a = {};
let b = a;
if(a === b){}             // true (same ref)

