
//----------
// нарезка подстрок:
//----------

let str = "string";

// возвращается опять же копия:
r =
[
 str.slice(2),     // [2]->end
 str.slice(2,-1),  // [2]->end-1
 str.slice(2,3),   // [2]->[3]

 // from [2] to [6]
 str.substring(6,2),
 str.substring(2,6),
 str.substring(2,4),
];


