
//----------
// setTimeout / setInterval - передача контекста:
//----------

function f1(){}
function f2(param){}
setTimeout(f1, 1000);
setTimeout(f2, 1000, 100);     // 100 это параметр в функцию f2

let f = function()
{
    class user
    {
        one = "ok";
        f(pContext = this) {console.log(pContext.one);}
    }
    let u = new user();
    u.f();  // ok
    setTimeout(u.f, 1000);          // ok, by default
    setTimeout(u.f, 1000, u);       // ok, by set
    setTimeout( () => u.f(), 1000);   // ok, by wrapping
};

f();

