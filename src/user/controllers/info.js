const informationModel = require("../models/info");

const { response } = require("../helpers");

module.exports = {
  searchByName: async function (req, res) {
    try {
      const { q } = req.query;
      const { id } = req.token;
      const result = await informationModel.searchByName(id, q);
      response(res, 200, result);
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  getAll: async function (req, res) {
    try {
      const result = await informationModel.getAll();
      response(res, 200, result);
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
};
