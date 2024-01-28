
//----------
// ссылка на родителя элемента html
//----------

console.log( document.documentElement.parentNode );
console.log( document.documentElement.parentElement );

while( elem = elem.parentElement ){ console.log(elem); }

for(let elem of document.body.children){ console.log(elem); }

