
//----------
// Set
//----------

let set = new Set();

let john = {name:"John"};
let pete = {name:"Pete"};

set.add(john);
set.add(pete);
set.add(john);  // ignored

for(let user of set){ console.log(user.name); }
set.forEach
(
   (pvalue,pvalueAgain,pset) =>
   {
    console.log(pvalue);
   }
);

