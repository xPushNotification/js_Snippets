
//----------
// массив из хтмл коллекции
//----------

// так как по умолчанию возвращается не массив, а коллекция
// не все функции работающие с массивом - с нею будут работать,
// например .filter:

console.log( document.body.childNodes.filter ); // undefined
document.body.childNodes[0] = null; // error, only reading permitted

arr = Array.from( document.body.childNodes );
console.log( arr.filter );                     // теперь работает

// естественно если использвать объектные, то проблем не будет:
//
console.log(Object.values(arr).filter);

// напомним, что фильтер вызывается так:
//
arr = [123,333,0];
console.log(arr.filter(item => item > 0));
