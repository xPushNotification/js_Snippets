
//----------
// преобразования объектов с волшебными функциями:
//----------

let user =
{
    name:"John",
    money:1000,
    toString() {return `name: ${this.name}`;},
    valueOf() {return this.money;},
};

alert(user);        // name: John
alert(+user);       // 1000

