const router = require("express").Router();
const infoController = require("../controllers/info");
const { authentication, authorization } = require("../../middleware/auth");
const multipleUpload = require("../../middleware/upload");

router
  .post(
    "/created",
    authentication,
    authorization,
    multipleUpload,
    infoController.createInfo
  )
  .get("/get", authentication, authorization, infoController.getAll)
  .patch(
    "/update",
    authentication,
    authorization,
    multipleUpload,
    infoController.updateInfo
  )
  .delete("/delete", authentication, authorization, infoController.deleteInfo);
module.exports = router;
