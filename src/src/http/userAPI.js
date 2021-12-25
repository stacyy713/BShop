import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

//Регистрация, авторизация и проверка токенов на валидность
export const registration = async (usr_login, password) => {
    const {data} = await $host.post('api/user/registration', {usr_login, password, role: 'USER'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (usr_login, password) => {
    const {data} = await $host.post('api/user/login', {usr_login, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
