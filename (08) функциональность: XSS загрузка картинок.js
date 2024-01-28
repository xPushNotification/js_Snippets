
//----------
// XSS загрузка картинок:
//----------

// (1) CORS policy aren't apply here:
let img = document.createElement("img");
img.src = "img.jpg";
img.onload = function()
{
    document.getElementById('inserthere').appendChild(img);
};
img.onerror = function(){};

// (2) with the CORS policy:
async function fff()
{
    let response = await fetch('https://site.ru/nyan.gif');
    let blob = await response.blob(); // as Blob-object
    let img = document.createElement('img');
    img.style = 'position:fixed;top:10px;left:10px;width:100px';

    document.body.append(img);
    img.src = URL.createObjectURL(blob);

    setTimeout
    (
       () =>
       { // hide after 3 sec.
           img.remove();
           URL.revokeObjectURL(img.src);
       },
    3000
    );

} // f:fff

fff();

