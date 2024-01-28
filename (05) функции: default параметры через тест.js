
//----------
// default параметры через тест:
//----------

function showMessage(from, text)
{
    if(text === undefined) {text = "one";}
    // eq:
    text = text || "one";
}
showMessage("only from");

