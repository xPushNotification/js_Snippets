
//----------
// асинхронная загрузка img как blob:
//----------

async function fff()
{
    let response = await fetch('https://site.ru/nyan.gif');

    let blob = await response.blob(); // скачиваем как Blob-объект

    // создаём <img>
    let img = document.createElement('img');
    img.style = 'position:fixed;top:10px;left:10px;width:100px';
    document.body.append(img);

    // выводим на экран
    img.src = URL.createObjectURL(blob);

    setTimeout(() => { // прячем через три секунды
      img.remove();
      URL.revokeObjectURL(img.src);
    }, 3000);

} //f:async: fff

fff();

