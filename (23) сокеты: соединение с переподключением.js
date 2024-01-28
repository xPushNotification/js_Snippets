let ws;

const connect = () => {
  const token = 'получить JWT токен здесь';

  ws = new WebSocket('ws://localhost:8080/mywebsocket');

  ws.onopen = () => {
    const message = {
      type: 'register',
      token: token
    };
    ws.send(JSON.stringify(message));
  };

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    // обработка сообщений от сервера
  };

  ws.onerror = (event) => {
    console.error('WebSocket error:', event);
    // обработка ошибок
  };

  ws.onclose = (event) => {
    console.warn('WebSocket closed:', event);
    // возможно, удалить все обработчики сообщений и переподключиться через некоторое время
    setTimeout(connect, 3000);
  };
};

connect();
