
//----------
// кеширующий декоратор:
//----------

/*
    a decorator logic:

    function decorator( target_function )
    {
        decorator static variables
        decorator functions

        return function( transferred_params )
        {
            do_decorator_staff

            return
            call target_function(transferred_params)
        }
    }

    function_name = decorator(function_name);
    function_name(aaa); <- call of the decorator
*/

function slow(px) {return px;}

function cachingDecorator(pFunc)
{
    let cache = new Map;

    return function(px)
    {
        if(cache.has(px)) return cache.get(px);

        let result = pFunc(px);
        cache.set(px, result);
        return result;

    } //f:lambda

}//f:cachingDecorator

slow = cachingDecorator(slow); // slow is a ref:addr
alert(slow(1)); alert(slow(1));

