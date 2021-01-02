const db = require("../../config/db");

module.exports = {
  checkUser: function (setData) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE email='${setData.email}'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  postRegister: function (setData) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO user SET ?", setData, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
