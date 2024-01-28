
//----------
// создание, вставка, удаление элемента:
//----------

let div = document.createElement("div");
div.className = "name";
div.innerHTML = "<strong>test</strong>";

document.body.append(div);
element.append(div);
element.prepend(div);
element.before(div);
element.after(div);
element.replaceWith(div);

div.insertAdjacentHTML("beforebegin", "<p>Привет</p>");
div.insertAdjacentHTML("afterend", "<p>Пока</p>");
/*
    <p>Привет</p>
    <div id='div'></div>
    <p>Пока</p>
*/

div.remove();

