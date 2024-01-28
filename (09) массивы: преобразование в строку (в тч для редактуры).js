
//----------
// преобразование в строку:
//----------

// (1)
arr = [1,2,3];
str = String(arr);  // "1,2,3"

// (2)
names = "name1, name2, name3";
r =
[
   names.split(", "),
   names.split(", ", 2)  // begin from the [3]
];

str = "testing";
s = str.split('');
// it is editable now:
s[1] = 'b';
str = s.join('');

