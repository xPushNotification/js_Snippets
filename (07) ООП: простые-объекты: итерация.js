
//----------
// итерация по свойствам, ключам и элементам:
//----------
// позволяет делать чтото вроде массивов пхп - однако без length
// и даже с доступом по квадратным скобкам -
// но в итерации придется писать именно for(let k of Object.keys(obj))
// а вместо определителя длины: Object.keys(obj).length

let user =
{
    name: "john",
    age:30,
};

for(let key of Object.keys(user)){}
for(let value of Object.values(user)){}
for(let entry of Object.entries(user)){}

// пример:
//
let obj =
{
    one: 111,
    two: 222,
};

obj["thr"] = 333;

for(let key of Object.keys(obj))
{
    console.log(key);           // one,two,thr
    console.log(obj[key]);      // 111,222,333
}

// работать не будет:
//
for(let key of obj)
{
    console.log(key);
}

// undefined:
//
console.log(obj.length);
console.log(Object.keys(obj).length);         // 3

// так как массив это объект
// для него ключи в виде строк тоже не естественны:

console.log("---------------");

let arr = [];
arr["one"] = 111;
arr["two"] = 222;
arr["thr"] = 333;

for(let key of Object.keys(arr))
{
    console.log(key);
    console.log(arr[key]);
}

console.log(arr.length);                // 0
console.log(Object.keys(arr).length);   // 3