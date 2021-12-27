const { ElectronicBook } = require("../models/models");
const ApiError = require("../error/ApiError");

class ElectronicBookController {
  async getAll(req, res) {
    let booksElectro = await ElectronicBook.findAndCountAll({});
    return res.json(booksElectro);
  }

  async create(req, res, next) {
    try {
      const { name, author, year, link, format, price } = req.body;
      const bookElectro = await ElectronicBook.create({
        name,
        author,
        year,
        format,
        price,
        link,
        timestamp: new Date().getTime(),
      });
      return res.json(bookElectro);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const bookElectro = await ElectronicBook.findOne({
      where: { id },
    });
    return res.json(bookElectro);
  }
}

module.exports = new ElectronicBookController();
