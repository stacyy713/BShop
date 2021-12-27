import { makeAutoObservable } from "mobx";

export default class ElectroStore {
  constructor() {
    this._electrobooks = [];
    makeAutoObservable(this);
  }

  //Сеттеры
  setBooks(electrobooks) {
    this._electrobooks = electrobooks;
  }

  //Геттеры
  get electrobooks() {
    return this._electrobooks;
  }
}
