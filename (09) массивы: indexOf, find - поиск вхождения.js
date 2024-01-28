
//----------
// поиск вхождения:
//----------

arr = [1,0,false];
r =
[
    arr.indexOf(0),         // 0
    arr.indexOf(1),         // 1
    arr.indexOf(false),     // 2
    arr.indexOf(5),         // -1
];

// поиск кастомным условием:
users =
[
    {id:1, name:"one"},
    {id:2, name:"two"},
];

users = users.find(item => idem.id == 1);
// eq:
users = users.find(
    function(item)
    {
        if(item.id == 1) return true;
        return false;
    }
);

