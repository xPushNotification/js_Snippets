
//----------
// селекторы элементов:
//----------

/*
    * - любые элементы
    div - элемент с таким тегом
    #id - элемент с таким айди
    .class - элементы с таким классом
    [name="value"] - с атрибутом
    :visited - с псевдоклассом
    .c1.c2 - элементы с одновременно двумя классами
    a#id.c1.c2:visited - элемент с айди и классами и псевдоклассом
    div p - элементы p являются потомками div
    div > p - только непосредственные потомки
    div ~ p - правые соседи (все p на том же уровне вложенности, которые после div)
    div + p - первый правый сосед
    :first-child - первый потомок родителя
    :last-child - последний потомок родителя
    :nth-child(a) - а по номеру потомок родителя (нумерация с 1)
    :nth-child(2n+1) - нечетные элементы
    :nth-child(3n+2) - каждый третий\
    [attr] - атрибут установлен
    [attr="val"] - атрибут равен val
    [attr^="val"] - атрибут начинается с val (например value)
    [attr|="val"] - атрибут равен val или начинается с val
    [attr*="val"] - атрибут содержит подстроку val, например myvalue
    [attr~="val"] - атрибут содержит val как одно из значений через пробел "val delete"
    [attr$="val"] - атрибут заканчивается на val
    :not(селектор) - все, кроме входящих в селектор
    :focus
    :hover
    :empty - без детей
    :checked, :disabled, :enabled - состояния input
    :target - для ссылок с анкором
    :before / :after - добавлятели контента из ксс
*/

r =
[
  document.getElementById("elem"),
  document.querySelectorAll("ul > li:last-child"),
];

for(let elem of document.body.children)
{
    if( elem.matches("a[href$='zip']") ) alert("zip link");
}

/*
    <h1>Содержание:</h1>
    <div class='contents'>
        <ul class='book'>
            <li class='chapter'>Глава 1</li>
            <li class='chapter'>Глава 2</li>
        </ul>
    </div>
*/

let chapter = document.querySelector(".chapter");
let book = chapter.closest(".book");   // ul
let h1   = chapter.closest(".h1");     // null, not a parent

let div  = elem.getElementsByTagName("div");
let elem = elem.getElementsByClassName("className");

