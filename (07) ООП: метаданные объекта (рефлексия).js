
//----------
// метаданные объекта:
//----------

let user = {name:"John",};
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(descriptor, null, 2));

