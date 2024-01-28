
//----------
// функция async из промиса
//----------

function loadJson1(url)
{
    return fetch(url)
    .then( response=> response.json() );

} // f:loadJson

// eq:
async function loadJson2(url)
{
    const response = await fetch(url);
    return await response.json();

} //f:loadJson

