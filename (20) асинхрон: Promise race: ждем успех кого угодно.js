
//----------
// Promise.race
//----------

Promise.race( [ fetch("one.js"),  fetch("two.js"), ] )
.then(console.log("ok"));

