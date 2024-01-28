
//----------
// задание дефолтов для параметров функции:
// очевидна попытка сделать pparams - однако наш вариант всеже чище
//----------

let options =
{
    title:"my title",
    items:["one","two"],
};

// it isn't an object, though it looks very similar to one:
let f = function(
    {
        title = "default title",
        width = 200,
        height = 100,
        items = [],
    }
){};

f(options);

// корректная нотация:

f = function(pparams)
{
   let title = "default title";
   let width = 200;
   let height = 100;
   let items = [];

  if(pparams["title"])  title = pparams["title"];
  if(pparams["width"])  width = pparams["width"];
  if(pparams["height"]) height = pparams["height"];
  if(pparams["items"])  items = pparams["items"];
};

if("f")
{
  let p = [];
  p["title"] = options.title;
  p["items"] = options.items;
  f(p);
}


// на самом деле так как и объекты и массивы имеют [] нотацию
// можно легко закидывать в функцию объекты и не переживать:
// (при учете того что там дополнительных перечислений не будет)
function fff(pparams = [])
{
    let title = "title";
    let width = 200;
    let height = 100;

    if(pparams["title"]) title = pparams["title"];
    if(pparams["width"]) title = pparams["width"];
    if(pparams["height"]) title = pparams["height"];

    console.log(title+":"+width+":"+height);
}
fff({title:"the title",width:100});


