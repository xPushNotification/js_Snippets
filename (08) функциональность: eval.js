
//----------
// eval:
//----------

let x = 1;
if(1)
{
    let x = 5;
    window.eval("alert(x)");    // 1
    eval("alert(x)");           // 5
}

