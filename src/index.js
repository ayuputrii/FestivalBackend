const router = require("express").Router();
const user = require("./user/models/user");
const authRoutes = require("./user/routes/auth");
const infoRoutes = require("./user/routes/info");
const userRoutes = require("./user/routes/user");

router
  .use("/auth", authRoutes)
  .use("/info", infoRoutes)
  .use("/user", userRoutes);
module.exports = router;
