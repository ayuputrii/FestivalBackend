const db = require("../config/mysql");

module.exports = {
  searchByName: function (judul) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT judul, deskripsi, fotografer, kategori FROM info WHERE judul LIKE '%${judul}%' ORDER BY judul ASC`,
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
};
