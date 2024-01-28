
//----------
// загрузка лишь видимых картинок:
//----------

function isVisible(elem)
{
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;

}//f:isVisible

function showVisible()
{
    for(let img of document.querySelectorAll("img"))
    {
        let realSrc = img.dataset.src;
        if(!realSrc) continue;
        if(isVisible(img))
        {
            img.src = realSrc;
            img.dataset.src = "";
        }
    }

}//f:showVisible

showVisible();
window.onscroll = showVisible;      // need to throttle

