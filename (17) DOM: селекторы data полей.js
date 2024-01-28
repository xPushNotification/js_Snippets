
//----------
// селекторы data полей
//----------

/*
<div show-info="name"></div>
<div show-info="age"></div>
*/

element = document.querySelector("['show-info']");
field = element.getAttribute("show-info");

// <div data-info="name"></div>
element = document.querySelector("['data-info']");
field = element.dataset.info;

