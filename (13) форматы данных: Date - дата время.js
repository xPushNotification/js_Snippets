
//----------
// дата время:
//----------

let now = new Date();
let date = new Date("2022-01-26");

let hours = now.getHours();

let start = new Date("2022-01-26");
let finish = Date.now();
let difference = finish - start;    // timestamp

// к формату кук (желательно вообще все в этом формате хранить и на сервере тоже):
function setCookie(name, value, exdate)
{
    //If exdate exists then pass it as a new Date and convert to UTC format
    (exdate) && (exdate = new Date(exdate).toUTCString());
    let c_value = escape(value) + ((exdate === null || exdate === undefined) ? "" : "; expires=" + exdate);
    document.cookie = name + "=" + c_value;
}

