
//----------
// Promise.allSettled
//----------

Promise.allSettled( [ fetch("one.js"),  fetch("two.js"), ] )
.then( results=> alert(results)  );

