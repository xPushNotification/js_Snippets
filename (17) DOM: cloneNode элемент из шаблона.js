
//----------
// элемент из шаблона:
//----------

/*
<template = 'tmpl'>	  -- может иметь id
    <style> a{color:red;} </style>
    <script> console.log("111"); </script>
    <tr><td>Содержимое</td></tr>
</template>

<div id='elem'></div>
*/
let elem = document.createElement("div");

// не переносим, а клонируем элемент, чтобы использовать его несколько раз:
elem.append( tmpl.content.cloneNode(true) );

document.body.append(elem);

