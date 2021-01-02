const db = require("../../config/db");

module.exports = {
  searchInfo: (title, id) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM info WHERE (title) LIKE '%${title}%' AND id <> ${id} ORDER BY title ASC`;
      db.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
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
  getPagination: (query) => {
    return new Promise((resolve, reject) => {
      const { page, limit } = query;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const sql = `SELECT * FROM info`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          const resultUsers = result.slice(startIndex, endIndex);
          resolve(resultUsers);
        }
      });
    });
  },
};
