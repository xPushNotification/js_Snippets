
//----------
// имитация формы через js
//----------

let form = document.createElement("form");
form.action = "//google.com/";
form.method = "GET";
form.innerHTML = "<input name='q' value='test'>";
document.body.append(form);
form.submit();

