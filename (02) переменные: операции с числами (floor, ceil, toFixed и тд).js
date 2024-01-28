
//----------
// операции с числами:
//----------

r =
[
  Math.floor(3.1),        // 3
  Math.ceil(3.1),         // 4
  Math.round(3.1),        // 3
  Math.trunc(3.7),        // 3
];

let num = 12.36;
num = num.toFixed(1);       // "12.4"
num = +num;

let sum = 0.1 + 0.2;        // 0.30000000000000004
sum = +sum.toFixed(2);      // 0.3

r =
[
  Math.max(3,5,6,8),
  Math.min(3,5,6,7),

  isNaN("str"),      // true
  isFinite("15"),    // true
];


