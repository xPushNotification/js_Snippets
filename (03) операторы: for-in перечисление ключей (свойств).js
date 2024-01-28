
//----------
// перечисление ключей (свойств):
//----------

let user =
{
    name: "John",
    age:30,
};

for(let key in user)
{
    console.log(key);
    console.log(user[key]);
}

/*
  перебирать значения в объекте не выйдет,
  нужен iterable объект (массив, коллекция).

  а вот перебирать в iterable ключи опасно,
  там может оказаться внутренняя характеристика.
*/

for(let value of user)
{
     console.log(value);          // ошибка
}