
//----------
// клонирование массива:
//----------
// так как массив простым присваиванием не скопируешь, будем клонировать:

// (1)
numbers = [1, 2, 3];
copyNumbers = [...numbers];                // клонирование не глубокое


// (2)                                     // глубокое клонирование только руками
numbers = [ [1,2], [3,4] ];
copyNumbers = [];
for (i = 0; i < numbers.length; i++)
{
  copyNumbers[i] = [];
  let elem = numbers[i];
  for(ii = 0; ii < elem.length; ii++)
  {
    copyNumbers[i][ii] = numbers[i][ii];
  }
}


// (3)                                  // так как map строит копию:
numbers = [1, 2, 3];
copyNumbers = numbers.map((x) => x);


// (4) или можно прокинуть через json -
// если внутри объекты или ключи все равно будут проблемы:

JSON.parse(JSON.stringify(numbers));

