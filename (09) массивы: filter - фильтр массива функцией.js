
//----------
// фильтр массива функцией:
//----------

let users =
[
    {id:1, name:"one"},
    {id:2, name:"two"},
    {id:3, name:"thr"},
];

let r =
[
    users.filter( item => item.id > 1 ),    // id:2,id:3
    // eq:
    users.filter( function(item) {return item.id > 1;} )
];

