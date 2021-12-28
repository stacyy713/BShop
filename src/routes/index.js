const Router = require("express");
const router = new Router();
const bookRouter = require("./bookRouter");
const userRouter = require("./userRouter");
const electronicBookRouter = require("./electronicBookRouter");

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/electro", electronicBookRouter);

module.exports = router;
