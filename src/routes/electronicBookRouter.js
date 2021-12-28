const Router = require("express");
const router = new Router();
const electronicBookController = require("../controllers/electronicBookController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), electronicBookController.create);
router.get("/", electronicBookController.getAll);
router.get("/:id", electronicBookController.getOne);

module.exports = router;
