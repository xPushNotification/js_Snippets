
//----------
// декоратор для метода класса:
//----------

let worker =
{
    some_method(){ return x; },
    slow(x){return x * this.some_method(x);},
};

function cachingDecorator()
{
    let cache = new Map();

    return function()
    {
        let key = hash(arguments);
        if(cache.has(key)) return cache.get(key);

        // let result = pfunc(x);   // no context
        let result = pfunc.call(this, ...arguments);
        cache.set(x, result);
        return result;

    } // f:lambda

} //f:cachingDecorator

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2)); console.log(worker.slow(2));

