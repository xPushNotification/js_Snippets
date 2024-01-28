
// GET:
fetch('https://example.com/api/data?id=123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
  }
}).then(function(response) {
  if (response.status === 200) {
    // обработка успешного ответа
    return response.json();
  } else if (response.status === 500) {
    // обработка ошибки на сервере
    throw new Error('Server error');
  }
}).then(function(data) {
  // обработка полученных данных
}).catch(function(error) {
  // обработка возникшей ошибки
});


// POST:
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'key1': 'value1',
    'key2': 'value2'
  })
}).then(function(response) {
  if (response.status === 200) {
    // обработка успешного ответа
    return response.json();
  } else if (response.status === 500) {
    // обработка ошибки на сервере
    throw new Error('Server error');
  }
}).then(function(data) {
  // обработка полученных данных
}).catch(function(error) {
  // обработка возникшей ошибки
});
