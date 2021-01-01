const router = require("express").Router();
const infoRoutes = require("./user/routes/informationRoutes");

router.use("/info", infoRoutes);
module.exports = router;
