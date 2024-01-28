
//----------
// WeakSet
//----------
// объект пропадет из массива - если удален снаружи него
// то есть если объект потеряет свой скоуп - внутри массива -
// это учтеться и он будет из массива потерян

let wset = new WeakSet();
let john = {name:1};
let pete = {name:2};
let liza = {name:3};
wset.add(john);
wset.add(pete);
wset.add(liza);     wset.delete(liza);
// delete john;
john = null;        // only that way

console.log(wset.has(john));    // false
console.log(wset.has(pete));    // true

