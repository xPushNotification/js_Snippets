
//----------
// функция как объект:
//----------

function one()
{
    if(typeof one.counter == 'undefined') {one.counter = 0;}

    console.log(one.name);          // one
    console.log(one.length);        // args num
    console.log(one.counter++);     // static variable
}

one();
one();

