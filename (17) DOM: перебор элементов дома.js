
//----------
// перебор элементов дома
//----------

document.body.querySelectorAll('img').forEach((img,i) => {
    img.setAttribute('editableimgid',i);
});

document.body.querySelectorAll('[editableimgid]').forEach((img) => {
    img.removeAttribute('editableimgid');
});

let id = 0;
let imgs = document.body.querySelectorAll([`editableimgid="{$id}"`]);
imgs.forEach(img => {
// ...
});

// выборка элементов делается селектором - после чего forEach для коллекции:
if(document.querySelectorAll('link[rel="next"]').length)
{
 var next_page_link =
 document.queqrySelector('link[rel="next"]').getAttribute("href");
}

