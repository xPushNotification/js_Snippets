
//----------
// получить оставшиеся элементы в виде массива:
//----------

let [one,two, ...rest1] = ["one","two","thr","fou"];
console.log(rest1);    // ["thr","fou",]

let {title, width, ...rest2} = options;

