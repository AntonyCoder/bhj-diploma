/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const { url, data, method, callback } = options;
    try {
        xhr.open(method, url);
        xhr.send(data);
    } catch (error) {
        console.error(error);
    }

    xhr.addEventListener('load', () => {
        callback(null, xhr.response);
    })
}