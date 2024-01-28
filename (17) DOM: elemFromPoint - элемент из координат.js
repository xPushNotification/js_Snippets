
//----------
// DOM элемент из координат:
//----------

let mmm_x = 0;
let mmm_y = 0;

$("body").mousemove(
    function(e)
    {
        mmm_x = e.pageX;
        mmm_y = e.pageY - window.pageYOffset;

    } // f:lambda
);

function f()
{
    //console.log(mmm_x, ":", mmm_y);
    let elem = document.elementFromPoint(mmm_x, mmm_y);
    elem.style.color = "red";

    console.log(elem);

} //f:f

setInterval(f, 1000);

