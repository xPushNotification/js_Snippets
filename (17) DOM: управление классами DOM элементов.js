
//----------
// управление классами DOM элементов
//----------

let cl = elem.body.classList;
let cn = elem.body.className;

elem.classList.add("article");
elem.classList.remove("article");
elem.classList.toggle("article");

if(elem.classList.contains("article")){}

for(let name of document.body.classList){}

