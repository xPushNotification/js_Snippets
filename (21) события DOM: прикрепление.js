
//----------
// события DOM прикрепление:
//----------

function ee(e)
{
    console.log(e);

} //f:ee

elem.addEventListener("click", ee);
elem.removeEventListener("click", ee);

