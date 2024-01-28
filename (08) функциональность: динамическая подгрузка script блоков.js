
//----------
// динамическая подгрузка script блоков
//----------
// не очень подходит конечно к концепции корня со скриптами (выгрузить нельзя)

let script = document.createElement("script");
script.src = "/script.js";
script.async = false;
document.body.append(script);

script.onload = function(){};
script.onerror = function(){};

