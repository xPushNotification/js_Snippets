// отправка заголовков невозможна, что мы делаем:
// 1. шлем токен первым сообщением со стороны клиента сразу после подключения
// 2. на стороне сервера если не прислан токен за 0.5 секунды - сброс сессии
// 3. при логауте - сбрасываем все и вызываем рест просрочки токена
// 4. в случае отправки данных шлем их через рест апи - не через сокет
// 5. на сокет принимаем только нотификации - сообщения загружаем тоже через рест

    api["connectWithSocket"] = function(){
        authToken = (document.getElementById("TESTZONEID_authToken")).value;

        ws = new WebSocket(socketAddress);
        ws.addEventListener('open', (event) => {
            let jwtToken = authToken;
            ws.send(JSON.stringify({ type: 'auth', token: jwtToken }));      // <- вот наш кусок
            console.log("WebSocket connection opened");
        });
        //-
        ws.addEventListener('message', (event) => {
            //console.log('WebSocket message received:', event.data);
            socketOutZone.value = event.data;
        });
    };
    api["disconnectWithSocket"] = function(){
        if(ws !== null && ws.readyState === WebSocket.OPEN) {
            ws.close();
            ws = null;
            console.log("disconnected");
        }
        else{
            console.log("already disconnected");
        }
    };


        api["onLogoutButton"] = function(){
            let accessToken = "badToken";
            let getTokenFunction = function getCookie(name) {
                const cookieMatch = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
                return cookieMatch ? decodeURIComponent(cookieMatch[2]) : null;
                };
            let token = getTokenFunction("token");
            if(token === null) return;
            accessToken = token;
            //-
            fetch('https://site.ru/api/v1/auth/expireOwnedTokensByUser', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + accessToken,      // <- так шлем запросы на обычный рест апи
                'Content-Type': 'application/json'
            },
            })
            .then(function(response) {
                if (response.status === 200) {return response.json();}
                else if (response.status === 500) {throw new Error('Server error');}
            })
            .then(function(data) {
                console.log("logout ok");
                let sc = function setCookie(name, value, expires, path) {
                    const cookieValue = name + "=" + encodeURIComponent(value);
                    if (expires) {
                        const expirationDate = new Date();
                        expirationDate.setTime(expirationDate.getTime() + (expires * 24 * 60 * 60 * 1000));
                        cookieValue += "; expires=" + expirationDate.toUTCString();
                    }
                    if (path) {cookieValue += "; path=" + path;}
                    document.cookie = cookieValue;
                }
                sc("token", "");
                location.reload();
            })
            .catch(function(error) {console.log("logout error");});
        };
