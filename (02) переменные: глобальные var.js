
//----------
// глобальные var:
//----------

if(true)
{
    var test = "assigned";
}

console.log(test); // доступна!

// на верхнем уровне переменная попадает в глобальный объект (в браузере - window):

let gvar = 5;
console.log(window.gvar);  // вот она!

