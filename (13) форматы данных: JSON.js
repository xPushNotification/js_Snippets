
//----------
// JSON:
//----------

// (01) --- примитивный вариант - просто создать строку:
user =
{
    name:"John",
    age:30,
    toString()
    {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};
alert(user);

// (02)--- использовать встроенную функцию:
json = JSON.stringify(user);
json = JSON.stringify(user, null, 2);

meetup =
{
    title:"Conference",
    date: new Date( Date.UTC(2022,0,1) ),
};

alert(JSON.stringify(meetup));  // date is converted

object_from_json = JSON.parse(json);

// в массивах пакуется при этом только верхняя часть:
arr = [2,4,5];
arr["key1"] =
[
    1,2,3
];
arr["key2"] =
[
    4,5,6
];

console.log(JSON.stringify(arr));

// аналогично и с объектами, паковаться будет только верхняя часть:
user =
{
    name:"John",
    age:30,
    arr: [1,2,3, [5,5,6,],],
};
user.arr["key"] = [1,2,3];
JSON.stringify(user);        // '{"name":"John","age":30,"arr":[1,2,3,[5,5,6]]}'

