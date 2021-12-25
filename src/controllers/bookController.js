const uuid = require('uuid');
const path = require('path');
const {Book} = require('../models/models');
const ApiError = require('../error/ApiError');

class BookController {
    async create(req, res, next) {
        try {
            const {name, author, year, genre, originality, price} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";

            //Перемещаем файл с заданым именем в нужную для нас папку
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            //Создаем новую книгу
            const book = await Book.create({name, author, year, genre, originality, price, img: fileName});
            return res.json(book);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        // let {limit, page} = req.query;
        // page = page || 1;
        // limit = limit || 9;
        // let offset = page * limit - limit;

        let books;
        books = await Book.findAndCountAll({});
        return res.json(books);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const book = await Book.findOne(
            {
                where: {id}
            }
        )
        return res.json(book);
    }
}

module.exports = new BookController();
