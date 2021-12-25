import {$authHost, $host} from "./index";

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book', book);
    return data
}

export const fetchBooks = async () => {
    const {data} = await $host.get('api/book');
    return data
}

export const fetchOneBook = async (id) => {
    const {data} = await $host.get('api/book/' + id);
    return data
}
