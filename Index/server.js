const http = require('http');

const server = http.createServer((req, res) => {
    // Разрешаем браузеру делать запросы (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.url === '/demo-action') {
        // Отправляем ответ, когда нажата кнопка demo
        const responseData = {
            message: "Node.js получил сигнал! Режим DEMO активирован.",
            status: "success"
        };
        res.end(JSON.stringify(responseData));
    } else {
        res.end('Сервер запущен. Ожидаю запроса от кнопки demo.');
    }
});

// Запускаем сервер на порту 3000
server.listen(3000, () => {
    console.log('Сервер работает: http://localhost:3000');
});