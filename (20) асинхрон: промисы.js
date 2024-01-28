
//----------
// асинхрон: промисы:
//----------

/*
    промис это кодирование потока последовательно
    и устранение callback-hell-a
    однако -
    с точки зрения логики описательного программирования -
    нужно задавать шаги - то есть функции

    и потом вызывать под них роутер
    в контроллере
    поэтому промисы для описательного программирования не подходят

    в описательном программировании
    следует кодировать через функцию роутер
    и запускать поток - именно такой функцией
    а в роутере - уже через async / awat запускать шаги
    для этого потока

    единственное место где промисы работают интереснее чем
    async / await - это .all вариант
    в котором ожидается исполнение сразу кучи запросов
    на fetch-e.
*/

/*
    promise
    (
        function(fresolve, freject)
            call fresolve(param) >-> promise.then
            call freject(param)  >-> promise.catch
    )
    promise(code)
    .then( param=>code)
    .catch(param=>code)
    .then( param=>code);
*/

function loadScript(src)
{
    return new Promise
    (
        function(resolve, reject)
        {
            let script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error("error"));
            document.head.append(script);

        } //f:lambda

    );
} // f: loadScript

let promise = loadScript("https://site.ru/src.js");

promise.then
(
    script=> alert(`${script} loaded`),
    error=> alert("error")
);

// how it works without a variable:
loadScript("https://site.ru/src.js")
.then(  script=> loadScript("step_02.js"))
.catch( err=> alert("error step 2"))
.then(  script=> loadScript("step_03.js"))
.catch( err=> alert("error stet 3") );
// eq:
loadScript("https://site.ru/src.js")
.then(
function(script) {return loadScript("step_02.js");}
);

