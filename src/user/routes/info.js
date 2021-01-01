const router = require("express").Router();
const infoController = require("../controllers/info");

router
  .get("/search/query", authentication, infoController.searchByName)
  .get("/", authentication, infoController.getAll);
