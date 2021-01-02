const db = require("../../config/db");

module.exports = {
  getUserLogin: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT username, email FROM user WHERE id=${id}`,
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
};
