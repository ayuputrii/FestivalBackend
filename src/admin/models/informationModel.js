const db = require("../../config/db");

module.exports = {
  updateInfo: (id, setData) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE info SET ? WHERE id=${id}`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
