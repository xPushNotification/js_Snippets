
//----------
// URL объект:
//----------

let url = new URL("https://yandex.ru/url?query=js");

r =
[
 t = url.protocol,		// https
 t = url.host,			// yandex.ru
 t = url.pathname,		// url
 t = url.searchParams	        // [ query:js ]
];

// установка параметров:
url.searchParams.set("tbs","qdr:y");

// параметры автоматически кодируются в строку:
console.log(url);		// https://uandex.ru/url?query=js&tbs=qdr%3Ay

// перебрать параметры в исходном виде:
for( let [name, value] of url.searchParams )
{
    alert( `${name}=${value}` );
}

