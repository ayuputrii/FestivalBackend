const router = require("express").Router();
const authController = require("../controllers/auth");
const {
  requiredName,
  requiredEmail,
  requiredPassword,
} = require("../../middleware/validators");

router
  .post("/login", authController.postLogin)
  .post(
    "/register",
    [requiredName, requiredEmail, requiredPassword],
    authController.postRegister
  );
module.exports = router;

// const router = require("express").Router();
// const authController = require("../controllers/auth");

// router
//   .post("/register", authController.register)
//   .post("/login", authController.login);
// module.exports = router;
