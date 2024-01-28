
//----------
// деструктуризация (deSTRUCTuring):
//----------

arr = ["one", "two"];
[first, second] = arr;                      // это не символ массива, это оператор разворота вроде list(a,b) в пхп

[first, second] = "one two".split(" ");
[firstName, , title] = ["Julius", "Ceasar", "Consul"];

[a="default a", b="default b"] = ["one"];

user = {};
[user.name, user.surname] = "Name Surname".split(" ");

options =
{
    title:"menu",
    width:100,
    height:200,
};

if(1){
    let {title,width,height} = options;
}
if(1){
    let {width,height,title} = options;
}
let {title="title default", width, height} = options;

for( let[key,value] of Object.entries(user) ){}

user = new Map();
user.set("name","one");
user.set("age", "30");

for([key, value] of user){}

