
//----------
// сброс длинных fetch запросов:
//----------

let controller = new AbortController();
setTimeout( ()=> controller.abort(), 1000 );

try
{
    let response = await fetch
    (
        "/file.php",
        {
           signal: controller.signal				// присоединяем контроллер
        }
    );
}
catch(err)
{
    if( err.name == "AbortError" ) alert("прервано контроллером!");
    else throw err;		// пробрасываем ошибку дальше
}

