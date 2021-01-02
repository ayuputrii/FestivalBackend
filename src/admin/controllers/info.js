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
    const { id } = req.params;
    informationModel
      .updateInfo(req.body, id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success Update Data",
            data: data,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Id Not Found",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          mesage: err.message,
        });
      });
  },
  changePhoto: (req, res) => {
    const setData = req.body;
    if (req.file) {
      setData.photo = req.file.filename;
      informationModel
        .changePhoto(req.params, { photo: req.file.filename })
        .then((data) => formResponse(data, res, 201))
        .catch((err) =>
          res.send({
            status: 401,
            message: err,
          })
        );
    } else {
      res.send({
        status: 500,
        message: [],
      });
    }
  },
  deleteInfo: (req, res, result) => {
    informationModel
      .deleteInfo(req.params.id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success Delete Data",
            data: result,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Id Not Found",
            data: result,
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          mesage: err.message,
        });
      });
  },
};
