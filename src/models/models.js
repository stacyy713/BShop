const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    usr_login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const BasketBook = sequelize.define('basket_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER},
    genre: {type: DataTypes.STRING},
    originality: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketBook);
BasketBook.belongsTo(Basket);

Book.hasMany(BasketBook);
BasketBook.belongsTo(Book);

module.exports = {
    User,
    Basket,
    BasketBook,
    Book
};

