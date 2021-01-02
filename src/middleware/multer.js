const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const newFileName = `${Date.now()}-${file.originalname}`;
    cb(null, newFileName);
  },
});

const fileFL = {
  limits: { fileSize: 5 * 1000 * 10000 },
  fileFilter(req, file, cb) {
    if (file.originalname.match(/\.(jpg|jpeg|png)\b/)) {
      cb(null, true);
    } else {
      cb("Image type must jpg, jpeg or png", null);
    }
  },
};
module.exports = multer({ storage, fileFL }).single("photo");
