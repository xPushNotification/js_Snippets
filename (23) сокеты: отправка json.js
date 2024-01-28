var socket = new WebSocket('ws://example.com/mywebsocket');

// Отправка JSON-данных на сервер
var data = {"name": "Вася", "age": 30};
socket.send(JSON.stringify(data));

// Обработка полученных JSON-данных от сервера
socket.addEventListener("message", function(event) {
  var data = JSON.parse(event.data);
  console.log(data);
});
