
//----------
// потеря this с setTimeout
//----------

let one =
{
    name:"one",
};

let two =
{
    name:"two",
    call: function(context = this)
    {
        console.log(context);

        if(context) {console.log(context.name);}
        else {console.log(this.name);}

    }, //m:call
};

two.call();         // two
two.call(one);      // one

setTimeout(two.call, 1000, one);    // two.call(one)
setTimeout(two.call, 2000);         // two.call(window)

