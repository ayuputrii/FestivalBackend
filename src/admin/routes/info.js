const router = require("express").Router();
const infoController = require("../controllers/info");
const { authentication, authorization } = require("../../middleware/auth");
const multipleUpload = require("../../middleware/upload");

const upload = require("../../middleware/multer");
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
    "/update/:id",
    authentication,
    authorization,
    infoController.updateInfo
  )
  .patch(
    "/change/:id",
    authentication,
    authorization,
    upload,
    infoController.changePhoto
  )
  .delete(
    "/delete/:id",
    authentication,
    authorization,
    infoController.deleteInfo
  );
module.exports = router;
