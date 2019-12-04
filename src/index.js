import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
//import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));
// Отрисовываем элементы в DOM.

postData('https://api.vk.com/method/users.get?', { user_ids: 210700286 })
    .then(data => console.log(JSON.stringify(data))) // JSON-строка полученная после вызова `response.json()`
    .catch(error => console.error(error));

function postData(url = '', data = {}) {
    // Значения по умолчанию обозначены знаком *
    return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
        .then(response => response.json()); // парсит JSON ответ в Javascript объект
}

// Отрисовываем элементы в DOM.
function render(data) {
    ReactDOM.render(
        React.createElement('div', null, data),
        document.getElementById('root')
    );
}