
//----------
// сортировка на месте (и функцией):
//----------

// массив отсортируется на месте
// если будет использована переменная вернется ссылка на отсортированный

let arr = [1,2,15];

function compareNum(a,b)
{
    if(a>b) return 1;
    if(a==b) return 0;
    return -1
}

let r =
[
    arr.sort(),                     //
    console.log(arr),               // здесь массив отсортирован 1,15,2

    arr.sort( compareNum ),         // 1,2,15 - и в "0" индекс также попадет 1,2,15

    // eq:
    arr.sort(
        function(pa,pb)
        {
            if(pa>pb){return 1}
            if(pa==pb){return 0;}
            return -1;
        }
    ),

    // eq:
    arr.sort( (pa,pb) => pa-pb ),
];

