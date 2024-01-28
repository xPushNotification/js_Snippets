
//----------
// fetching:
//----------

url = "https://api.github.com/repos/comm.php";
response = await fetch(url);
commits = await response.json();
console.log( commits[0].author.login );

//* blob
response = await fetch("/image.svg");
blob = await response.blob();
img = document.createElement("img");
img.style = "position:fixed; top:10px; left: 10px; width:100px;";
document.body.append(img);
img.src = URL.createObjectURL(blob);	// создается внутрибраузерный временный урл
setTimeout
(
    ()=>
    {
        img.remove();
        URL.revokeObjectURL(img.src);		// надо освобождать память
    },
    3000
);

//* хедеры:
response = await fetch("/en.php");
//* получить один заголовок:
console.log( response.headers.get("Content-Type") );	// application/json; charset=utf-8
//* перебрать все заголовки:
for( [key,value] of response.headers ) alert( `${key} : ${value}` );

//* можно установить заголовки запроса:
response =
fetch
(
    protectedURL,
    {
        headers:
        {
            Authentification: "secret",
        }
    }
);

//* post
user =
{
    name: "John",
    surname: "Smith",
};
response = await
fetch
(
    "/article/user.php",
    {
        method: "POST",
        headers:{ "Content-Type":"application/json; charset:utf-8" },
        body: JSON.stringify(user),		// post данные
    }
);
result = await response.json();

//* form data
formElem.onsubmit = async (e) =>
{
    e.preventDefault();

    response = await fetch('/user.php', {
        method: "POST",
        body: new FormData(formElem)		// копирование данных, в тч файла, в запрос
    });

    result = await response.json();

    alert(result.message);
};

