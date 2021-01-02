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
  updateInfo: (body, id) => {
    return new Promise((resolve, reject) => {
      const { title, description, photographer, category } = body;
      db.query(`SELECT * FROM info WHERE id=${id}`, body, (err, result) => {
        if (!err) {
          if (result.length) {
            const data = Object.entries(body).map((item) => {
              return parseInt(item[1]) > 0
                ? `${item[0]}=${item[1]}`
                : `${item[0]}='${item[1]}'`;
            });
            let query = `UPDATE info SET ${data} WHERE id=${id}`;
            db.query(query, (result) => {
              if (data) {
                resolve(` Id ${id} Succesfully updated`);
              } else {
                reject("Failed update");
              }
            });
          } else {
            reject("id not found");
          }
        } else {
          reject("Failed update");
        }
      });
    });
  },

  changePhoto: (params, body) => {
    // console.log("isi dalam params", params);
    // console.log("isi dalam body", photo);
    const { photo } = body;
    const { id } = params;
    return new Promise((resolve, reject) => {
      db.query(`SELECT photo FROM info WHERE id=${id}`, (err, res) => {
        if (!err) {
          const data = Object.entries(body).map((item) => {
            return parseInt(item[1]) > 0
              ? `${item[0]} = ${item[1]}`
              : `${item[0]} = ${item[1]}`;
          });

          db.query(
            `UPDATE info SET photo = '${photo}' WHERE id=${id}`,
            (err, res) => {
              if (!err) {
                resolve(res);
              } else {
                reject(err);
              }
            }
          );
        } else {
          reject(err);
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
