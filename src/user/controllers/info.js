const informationModel = require("../models/info");

const { response } = require("../../helpers");

module.exports = {
  searchInfo: (req, res) => {
    const { title, page, limit } = req.query;
    informationModel
      .searchInfo(req.body, title, page, limit)
      .then((data) => {
        if (data.length == 0) {
          res.status(400).send({
            success: false,
            message: "Data Not Found",
            data: data,
          });
        } else {
          res.status(200).send({
            success: true,
            message: "Success Search Data Transfer",
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
  getAll: async function (req, res) {
    try {
      const result = await informationModel.getAll(req.query);
      response(res, 200, result);
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  getPagination: async (req, res) => {
    try {
      const result = await informationModel.getPagination(req.query);
      response(res, 200, result);
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
};
