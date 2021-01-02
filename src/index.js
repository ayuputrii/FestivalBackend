const router = require("express").Router();
const authRoutes = require("./user/routes/auth");
const infoRoutes = require("./user/routes/info");

router.use("/auth", authRoutes).use("/info", infoRoutes);
module.exports = router;
