const db = require("../../config/db");

module.exports = {
  searchByName: function (title) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT title, description, photographer, category FROM info WHERE title LIKE '%${title}%' ORDER BY title ASC`,
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
