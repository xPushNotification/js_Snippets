
//----------
// async / await
//----------

// await может быть только в асинхронной функции
// async всегда запускает отдельный поток, нельзя (!) ждать из основного потока
// только из вновь запущенного

// (1) что подразумевается:
async function f()
{
    // return Promise.resolve(1);
    return 1;
}
f().then(alert);    // 1

// (2)
async function f()
{
    let promise = new Promise
    (
        (resolve, reject)=>
        {
            setTimeout( ()=>resolve("ok"), 1000 );
        }
    );
    let result = await promise;
    console.log(result);
}
f();

// (3)
async function showAvatar()
{
    let response = await fetch("/user.json");
    let user = await response.json();

    let githubResponse = await fetch("/username/");
    let githubUser = await githubResponse.json();

    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-example";
    document.body.append(img);

    await new Promise
    (
        (resolve, reject) => setTimeout(resolve, 3000)
    );

    img.remove();
    return githubuser();
}
showAvatar();              // функция вышла из основного потока (по другому никак)
console.log(1);            // execute first   // нельзя ждать, хочешь ждать весь контроллер пихай в async

// (4) await в любом месте:
// запуск потока - аналогичен тому - как если бы функцию запустили через setTimeout(0)

(async ()=>
 {
    let response = await fetch("/script.json");
    let user = await respone.json();
 }
)();

