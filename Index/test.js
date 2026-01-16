// 1. Находим кнопку в HTML
const demoBtn = document.querySelector('.demo');

// 2. Вешаем событие "клик"
demoBtn.addEventListener('click', () => {
    console.log('Кнопка нажата, отправляю запрос на сервер...');

    // 3. Делаем запрос к нашему серверу Node.js
    fetch('http://localhost:3000/demo-action')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка сети');
            return response.json(); // Превращаем ответ в понятный объект
        })
        .then(data => {
            // 4. Что-то делаем с данными от сервера
            alert(data.message); // Выскочит окно с текстом от Node.js
            demoBtn.style.backgroundColor = '#4CAF50'; // Кнопка станет зеленой
            demoBtn.innerText = 'Готово!';
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Не удалось связаться с сервером. Ты запустил server.js?');
        });
});