const userModels = require("../models/user");
const { response } = require("../../helpers");

module.exports = {
  getUserLogin: async function (req, res) {
    try {
      const { id } = req.token;
      const result = await userModels.getUserLogin(id);
      response(res, 200, result);
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
};
