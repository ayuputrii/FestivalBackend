const db = require("../../config/db");

module.exports = {
  searchInfo: function (body, title, page, limit) {
    return new Promise((resolve, reject) => {
      if (!limit) {
        limit = 4;
      } else {
        limit = parseInt(limit);
      }

      if (!page) {
        page = 1;
      } else {
        page = parseInt(page);
      }
      const query = `SELECT * FROM info WHERE title LIKE '%${title}%' ORDER BY title ASC`;
      db.query(query, body, (err, data) => {
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
