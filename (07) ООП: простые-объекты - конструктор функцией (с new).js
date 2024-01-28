
//----------
// конструктор объекта через функцию:
//----------

function makeUser(name, age)
{
    return {name:name, age:age};
    // eq:
    return {name, age};

} //f:makeUser

user = makeUser("John", 30);

// -----------------------------
// вызов функции более универсален, она может быть вызвана с new или без:

// (a):
function User(name)
{
    if(!new.target) {alert("no new in call!");}
    // this = {};           // если вызывается через new
    this.name = name;
    this.isAdmin = false;
    // return this;         // если вызывается через new
}

// равняется:

class User
{
    constructor(name)
    {
        if (!new.target) {alert("no new in call!");}
        this.name = name;
        this.isAdmin = false;
    }
}

// (b):
function User()
{
    this.name = "petya";
    return { name:"vasya", };
    // return this;         // не будет вызывано
}

user = new User;
// eq:
user = new User();

