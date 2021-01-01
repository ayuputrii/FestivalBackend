const informationModel = require("../models/informationModel");

module.exports = {
  createInfo: (req, res) => {
    const { id } = req.params;
    req.body.photo = req.file ? req.file.filename : "";
    informationModel
      .createInfo(req.token, req.body, id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success",
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
  updateInfo: (req, res) => {
    const { id } = req.params;
    req.body.photo = req.file ? req.file.filename : "";
    informationModel
      .updateInfo(req.token, req.body, id)
      .then((data) => {
        res.status(200).send({
          success: true,
          message: "Success",
          data: data,
        });
      })
      .catch((err) => {
        res.status(400).send({
          success: false,
          message: "Failed",
        });
      });
  },
  patchInfo: (req, res, result) => {
    const { id } = req.params;
    informationModel
      .patchInfo(req.body, id)
      .then((data) => {
        if (result.length) {
          res.status(200).send({
            message: "Success",
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
