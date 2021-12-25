import axios from "axios";

//Первый случай - не требуется авторизация
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//Второй случай - с авторизацией
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//Инстерцепторы нужны в случае второго инстанса для автоматического подставления токенов при отправке запроса
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
};
