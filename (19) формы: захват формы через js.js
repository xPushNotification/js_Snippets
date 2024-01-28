
//----------
// захват формы через js
//----------

let form = document.forms.my;
let login = form.login;
if(login.form == form){} // true /back ref

let input = form.input;
if(input.checked){}

let options = form.options;
if(options[2].selected){}

