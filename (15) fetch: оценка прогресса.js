
//----------
// оценка прогресса fetch:
//----------

const reader = response.body.getReader();
while( true )
{
    const {done, value} = await reader.read();
    if( done ) break;

    console.log( `получено: ${value.length} байт` );
}

