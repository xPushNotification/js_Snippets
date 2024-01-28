
//----------
// Promise.all
//----------

// (a)
let urls =
[
    "one.js", "two.js", "thr.js"
];
// requests: [promise,promise,promise]
let requests = urls.map( url=> fetch(url) );

Promise.all(requests)
.then(
    responses => responses.forEach
    (
        response => console.log(`${response.url}: ${response.status}`)
    )
);

// (b)
Promise.all( [ fetch("one.js"),  fetch("two.js"),  ] )
.then(console.log("ok"));
// eq:
await Promise.all( [ fetch("one.js"),  fetch("two.js"),  ] );
console.log("ok");

