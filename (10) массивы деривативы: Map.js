
//----------
// Map это подобие масива в PHP, однако с очень не удобным .get для индексов
//----------

map = new Map();
map.set(1, "str");
map.set("str", 1);

val = map.get(1);

map = new Map
(
    [   // ref:addr
        ["one",1],      // 0: object: "one"=>1
        ["two",2],      // 1: object: "two"=>2
        ["thr",3],      // 2: object: "thr"=>3
    ],
    // ["key","value"], // doesn't work
);
for(key of map.keys()){}        // "one","two","thr"
for(entry of map.values()){}    // 1,2,3
for(entry of map){ console.log(entry); } // arrays

