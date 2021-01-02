const router = require("express").Router();
const infoController = require("../controllers/info");
const { authentication, authorization } = require("../../middleware/auth");

router
  .get("/search/query", authentication, infoController.searchByName)
  .get("/", authentication, infoController.getAll)
  .get("/get", authentication, infoController.getPagination);
module.exports = router;
