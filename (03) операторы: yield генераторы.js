
//----------
// генераторы:
//----------

function* generateSequence()            // внимание на звездочку
{
    yield 1;
    yield 2;
    return 3;

}//f:generateSequence

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let thr = generator.next();

console.log(one,two,thr);

