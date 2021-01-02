const informationModel = require("../models/info");
const form = require("../../helpers/form");

module.exports = {
  createInfo: (req, res) => {
    const { body } = req;
    const multipleImage = req.filePath;
    const insertBody = {
      ...body,
      photo: multipleImage,
    };
    informationModel
      .createInfo(insertBody)
      .then(() => {
        const resObject = {
          msg: "Success a create",
          data: { ...insertBody, photo: req.filePath.split(",") },
        };
        form.success(res, resObject);
      })
      .catch((err) => {
        const errMsg = {
          msg: "Failed a create",
          err,
        };
        form.error(res, errMsg);
      });
  },
  getAll: (req, res) => {
    informationModel
      .getAll(req)
      .then((data) => {
        res.status(200).send({
          message: "Success get a data",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  },
  updateInfo: (req, res, result) => {
    req.body.photo = req.file ? req.file.filename : "";
    const { id } = req.token;
    informationModel
      .patchInfo(req.body, id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          mesage: err.message,
        });
      });
  },
  deleteInfo: (req, res) => {
    const { id } = req.params;
    informationModel
      .deleteInfo(req.body, id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          mesage: err.message,
        });
      });
  },
};
