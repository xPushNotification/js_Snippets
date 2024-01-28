
//----------
// длина массива:
//----------

arr.length = 2;     // all elements after arr[1] are deleted
arr.length = 0;     // arr is clean now

// не забываем про ключи:
console.log(Object.keys(arr).length);
