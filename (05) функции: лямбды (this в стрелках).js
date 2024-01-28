
//----------
// this стрелки не имеют контекста, используя его с места, где они находятся
// вообще там где можно контекст лучше явно передавать, чтобы потом не страдать
//----------

// (a):
let group =
{
    title: "Our group",
    students: ["John","Pete", "Alice",],
    showList1()
    {
        this.students.forEach( student => console.log(this.title) );           // функция в объекте group /this оттуда
    },
    // eq:
    showList2()
    {
        this.students.forEach( function(student) {console.log(this.title);} ); // undefined
        this.students.forEach( function(pel) {console.log(this);} );           // this == "window"
    }
};

group.showList1();
group.showList2();

// (b):
function defer(f,ms)
{
    return function()
    {
        setTimeout( ()=> f.apply(this,arguments), ms );
    };
}
// eq:
function defer(f,ms)
{
    return function(...args)
    {
        let ctx = this;         // evident
        setTimeout
        (
            function() {return f.apply(ctx, args);},
            ms
        );
    } // f:ret
} // f:defer

function sayHi(who) {alert(who);}
let sayHiDiffered = defer(sayHi, 2000);
sayHiDiffered("John");

