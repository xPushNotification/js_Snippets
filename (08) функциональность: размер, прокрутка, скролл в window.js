
//----------
// размеры, прокрутка, скролл в window
//----------

r =
[
   window.innerWidth,				// полная ширина окна
   document.documentElement.clientWidth	// ширина окна за вычетом полосы прокрутки
];

// определение высоты документа:
let db = document.body;
let de = document.documentElement;

let scrollHeight = Math.max
(
    db.scrollHeight, de.scrollHeight,
    db.offsetHeight, de.offsetHeight,
    db.clientHeight, de.clientHeight
);
console.log( "полная высота документа с прокручиваемой частью:"+scrollHeight );

// получение текущей прокрутки:

let yOffset = window.pageYOffset;
let xOffset = window.pageXOffset;

// для осуществления прокрутки страницы её HTML должен быть как минимум готов.

// прокрутка так чтобы элемент оказался сверху:
elem.scrollIntoView(true);

// мягкий скролл:
elem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

// запрет прокрутки:
document.body.style.overflow = "hidden";
elem.style.overflow = "hidden";

