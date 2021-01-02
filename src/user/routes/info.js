const router = require("express").Router();
const infoController = require("../controllers/info");
const { authentication } = require("../../middleware/auth");

router
  .get("/search/query", authentication, infoController.searchInfo)
  .get("/", authentication, infoController.getAll)
  .get("/get", authentication, infoController.getPagination);
module.exports = router;
