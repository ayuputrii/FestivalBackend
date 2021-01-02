const authModels = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { response } = require("../../helpers");

module.exports = {
  postLogin: async function (req, res) {
    try {
      const setData = req.body;
      const result = await authModels.checkUser(setData);
      if (!result[0]) {
        res.status(401).send({
          message: "Email Not Found",
        });
      }
      let check = true;
      if (result[0].role != 6) {
        check = bcrypt.compareSync(setData.password, result[0].password);
      }
      if (check) {
        const { id, role, username, email } = result[0];
        const token = jwt.sign(
          {
            id,
            role,
            username,
            email,
          },
          process.env.SECRET_KEY
        );
        let roles = "user";
        if (role == 6) {
          roles = "admin";
        }
        response(res, 200, {
          message: "Auth Success",
          token,
          roles,
        });
      } else {
        res.status(401).send({
          message: "Invalid Password",
        });
      }
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
  postRegister: async function (req, res) {
    try {
      const errors = validationResult(req).array();
      if (!errors.length) {
        const setData = req.body;
        const checkUser = await authModels.checkUser(setData);
        if (checkUser[0]) {
          return response(res, 403, { message: "Email already exist" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newData = {
          ...setData,
          password: hash,
        };
        const result = await authModels.postRegister(newData);
        response(res, 200, { data: result, message: "Register Success" });
      } else {
        response(res, 403, { message: errors });
      }
    } catch (error) {
      response(res, 500, { message: "Register Failed" });
    }
  },
};
