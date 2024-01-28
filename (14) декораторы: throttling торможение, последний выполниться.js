
//----------
// throttling:
//----------

/*
  троттлинг: начало сиквенса -> функция вызывается -> период выжидается в это время повторые игнорируются -> функция вызывается 
  дебансинг: начало сиквенса -> установка отброса -> конец сиквенса -> функция вызывается
*/

// пример 1:

function throttle(func, ms) 
{
    let isThrottled = false,
    savedArgs,
    savedThis;

    function wrapper()
    {
      if (isThrottled)              // (2)
      { 
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);  // (1)
      isThrottled = true;

      setTimeout(
        function()
        {
          isThrottled = false;      // (3)
          if (savedArgs)
          {
              wrapper.apply(savedThis, savedArgs);
              savedArgs = savedThis = null;
          }
        }, //f:lambda  
        ms
      ); // setTimeout

    } // f:wrapper

  return wrapper;

} // f: throttle



// пример 2:

function throttle(f, t) 
{
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined               // function is being called for the first time
        || (this.lastCall - previousCall) > t) { // throttle time has elapsed
      f(args);
    }
  }
}

let logger = (args) => console.log(`My args are ${args}`);

// throttle: call the logger at most once every two seconds
let throttledLogger = throttle(logger, 2000); 

throttledLogger([1, 2, 3]);     // called
throttledLogger([1, 2, 3]);     // this and below are ignored
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
setTimeout(function(){throttledLogger([1,2,3]);}, 2300);
setTimeout(function(){throttledLogger([1,2,3]);}, 2200);
setTimeout(function(){throttledLogger([1,2,3]);}, 2100); // called

// "My args are 1, 2, 3" - logged twice