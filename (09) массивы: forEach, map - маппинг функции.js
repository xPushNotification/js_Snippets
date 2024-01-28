
//----------
// .forEach для маппинга функции:
//----------

// вернуть новый массив (!) - для создания элементов которого применилась функция

// .map:
lengths = ["one","two","three"].map(pitem=>pitem.length);
// eq:
lengths = ["one","two","three"].map
(
    function(pitem) {return pitem.length;}
);

// аналог, сделанный forEach

arr = ["name1", "name2", "name3"];
mapped = [];
arr.forEach(
  (item, index, array) =>
  {
     console.log( `${item} got ${index} in ${array}` );
     mapped.push(item*2)
  }
);
