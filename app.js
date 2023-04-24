const http = require('http');

const server = http.createServer((req, res) => {
    // Отримуємо cookie з запиту
    const { cookie } = req.headers;

    // Перевіряємо наявність cookie з ім'ям "user_info"
    if (cookie && cookie.includes('user_info=user1')) {
        // Якщо значенням cookie "user_info" є рядок "user1", повертаємо JSON
        const json = {
            id: 1,
            firstName: 'Leanne',
            lastName: 'Graham',
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
    } else {
        // Інакше повертаємо порожній об'єкт
        res.end('{}');
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
