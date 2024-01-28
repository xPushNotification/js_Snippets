
//----------
// delay:
//----------

function delay(f, ms)
{
    return function()
    {
        setTimeout( ()=>f.apply(this,arguments), ms );

    } //f:return

} //f:delay

let f1000 = delay(alert,1000);
f1000("test");

