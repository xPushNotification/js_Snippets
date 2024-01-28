
//----------
// regexp ленивый против жадного:
//----------

matches = "JavaScript".match(/HTML/) || [];		// всегда массив
if(!matches.length){}	// теперь работает

r =
[
 "We will, we will".replace(/we/i, "I"),		// I will, we will
 "We will, we will".replace(/we/ig, "I"),	        // I will, I will
 "Люблю HTML".replace(/HTML/, "$& и JavaScript")	// Люблю HTML и JavaScript
];

// жадный поиск:
// по умолчанию
regexp = /".+"/g;           // от ПЕРВОЙ кавычки до ПОСЛЕДНЕЙ кавычки
str = 'a "witch" and her "broom" is one';
t = str.match( regexp );	// "witch" and her "broom"

// ленивый поиск:
// ? - после квантификатора
regexp = /".+?"/g;          // от ПЕРВОЙ кавычки до СЛЕДУЮЩЕЙ кавычки
str = 'a "witch" and her "broom" is one';
t = str.match( regexp );	// witch, broom

r =
[
 "Gogogo now!".match(/(go)+/i),	   		// gogogo
 "site.com my.site.com".match(/(\w+\.)+\w+/g)	// site.com, my.site.com
];

dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/; // три группы

str = "2019-04-30";
groups = str.match(dateRegexp).groups;	// появилась возможность получить группы

console.log( groups.year  );
console.log( groups.month );
console.log( groups.day   );

