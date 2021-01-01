const router = require("express").Router();

const infoRoutes = require("./admin/routes/info");

router.use("/info", infoRoutes);
module.exports = router;
