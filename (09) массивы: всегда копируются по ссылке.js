
//----------
// копия по ссылке массивов
//----------

let arr = [];
let ar2 = arr;
if(ar2 == arr){}    // true

// полная копия:
numbers = [1, 2, 3];
numbersCopy = [...numbers];