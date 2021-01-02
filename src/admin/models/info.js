const db = require("../../config/db");

module.exports = {
  createInfo: (insertBody) => {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO info SET ?";
      db.query(sql, insertBody, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM info", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
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
  deleteInfo: (id, setData) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM info WHERE id=${id}`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
