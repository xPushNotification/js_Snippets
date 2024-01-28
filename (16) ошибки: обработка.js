
//----------
// обработка ошибок:
//----------

class ValidationError extends Error
{
    constructor(message)
    {
        super(message);
        this.message = message;
        this.name = "Error Validation";

    } //m:constructor

} //c:ValidationError

try
{
    if(1){ throw new ValidationError("Validation Error!"); }
}
catch(e)
{
    if( e instanceof ValidationError ){}
    else throw new Error(e);
}
finally
{
    console.log("finally");
}

// global catch:
window.onerror =
function(message, url, line, col, error){};

