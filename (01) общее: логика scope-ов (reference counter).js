
//----------
// логика scope-ов (reference counter):
//----------

let link = null;

if(1)
{
    let obj1 = {link:link};
    let obj2 = {link:obj1};
    let obj3 = {link:obj2};
    link = obj3;
}
// obj1,obj2,obj3 теперь в памяти (на них есть ссылки)

delete link;        // ссылка уделена, объекты вышли из памяти
link = [];
link = null;
