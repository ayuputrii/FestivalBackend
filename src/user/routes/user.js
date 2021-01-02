const router = require("express").Router();
const userController = require("../controllers/user");
const { authentication } = require("../../middleware/auth");

router.get("/login", authentication, userController.getUserLogin);
module.exports = router;
