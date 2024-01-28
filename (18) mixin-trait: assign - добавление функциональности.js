
//----------
// mixin/trait
//----------

let mixin =
{
    f_01: function() {console.log(1);},
    f_02: function() {console.log(2);},
};

class User
{
    constructor(name){this.name = name;}

} //c:User

Object.assign(User.prototype, mixin);

let user = new User;
user.f_02();

