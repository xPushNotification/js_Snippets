
//----------
// тест на наличие подстроки:
//----------

// * a
let str = "this is the string";

index =
[
 str.indexOf(substring, begin_position),
 str.indexOf("str", 0),
 str.indexOf("str"),
];

if(str.indexOf("str") !== -1) console.log("found");

// * b
let founds = [];
let pos = 0;
while(true)
{
    let foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;

    found.push(foundPos);
    pos = foundPos+1;
}

// * c
r =
[
 "Widget with id".includes("Widget"),   // true
 "Hello".includes("bye"),               // false
 "Midget".includes("id",3),             // false, start from 3

 "Widget".startsWith("Wid"),            // true
 "Widget".endsWith("get"),              // true
];

