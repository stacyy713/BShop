import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._books = [];
        makeAutoObservable(this);
    }

    //Сеттеры
    setBooks(books) {
        this._books = books;
    }

    //Геттеры
    get books() {
        return this._books;
    }
}
