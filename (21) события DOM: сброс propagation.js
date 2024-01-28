
//----------
// сброс propagation
//----------

menu.onclick = function(event)
{
    if(event.target.nodeName != "A") return;
    let href = event.target.getAttribute("href");
    console.log(href);

    return false;   // prevent default
}

elem.oncontextmenu = function(event)
{
    event.preventDefault();
    event.stopPropagation();
    console.log(1);
}

