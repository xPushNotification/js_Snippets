
//----------
// лямбды (стрелочные функции)
//----------

r =
[
 function(a1,a2){ expression(); },
 (a1, a2)=>expression(),  // eq

 function(a1){ expression(); },
 arg1 => expression(),

 function(){ expression(); },
 ()=> expression(),

 (a,b)=>
 {
    let result = a+b;
    return result;
 },
 // eq:
 (a,b)=> a+b,
];

// в стрелочных функциях нет this:
let user =
{
    firstName:"name",
    sayHi()
    {
        let arrow = ()=> alert(this.firstName);
        arrow();
    },
};
