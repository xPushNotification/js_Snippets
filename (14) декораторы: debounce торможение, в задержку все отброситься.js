
//----------
// debounce:
//----------

/*
  троттлинг: начало сиквенса -> функция вызывается -> период выжидается в это время повторые игнорируются -> функция вызывается 
  дебансинг: начало сиквенса -> установка отброса -> конец сиквенса -> функция вызывается
*/

function debounce(f,ms)
{
    let isCoolingDown = false;

    return function()
    {
        if(isCoolingDown) return;
        f.apply(this, arguments);

        isCoolingDown = true;
        setTimeout( ()=> isCoolingDown = false, ms );

    } //f:return

} //f:debounce

let dbc = debounce( alert, 100 );
dbc("message");         // ok
dbc("message one");     // bounce
dbc("message two");     // bounce
setTimeout( dbc, 1000, "message four" ); // ok

