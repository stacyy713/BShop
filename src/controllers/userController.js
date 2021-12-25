const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (id, usr_login, role) => {
    return jwt.sign(
        {id, usr_login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}


class UserController {
    async registration(req, res, next) {
        const {usr_login, password, role} = req.body;
        if (!usr_login || !password) {
            return next(ApiError.badRequest('Некорректный логин или пароль'));
        }
        const candidate = await User.findOne({where: {usr_login}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует'));
        }

        //salt=сколько раз будем хєшировать пароль
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({usr_login, role, password: hashPassword});
        //Сразу же создаем под нового пользователя корзину
        const basket = await Basket.create({userId: user.id});

        const token = generateJwt(user.id, user.usr_login, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {usr_login, password} = req.body;
        const user = await User.findOne({where: {usr_login}});
        if (!user) {
            return next(ApiError.internal('Пользователь с таким логином не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.usr_login, user.role);
        return res.json({token});
    }

    async check(req, res, next) {

        const token = generateJwt(req.user.id, req.user.usr_login, req.user.role);
        return res.json({token});

    }
}

module.exports = new UserController();
