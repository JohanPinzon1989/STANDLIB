const bcrypt = require("bcrypt");
const auth = require("../../auth");
const jwt = require("jsonwebtoken");
const { use } = require("./rutas");
const { render } = require("ejs");

const Table = "documentos";

module.exports = function (dbInyect) {
  let db = dbInyect;

  if (!db) {
    db = require("../../../DB/database");
  }

  function getAll() {
    return db.getAll(Table);
  }

  function find(id) {
    return db.find(Table, id);
  }

  async function add(req, res) {
    const { body, file } = req;
    var fecha = require("moment");
    var hoy = fecha().format("YYYY-MM-DD");
console.log(req.file)
    const documento = {
      id: null,
      Nombre: body.Nombre,
      Abreviacion: body.Abreviacion,
      Descripcion: body.Descripcion,
      Descripcion_ing: body.Descripcion_ing,
      Fecha_carga: `${hoy}`,
      Fecha_vigencia: `${hoy}`,
      Estado: "Activo",
      link: `file/uploaders/${file.filename}`,
      Autor: body.Autor,
    };
    console.log(documento);
    const result = await db.agregar(Table, documento);
    res.render("ESP/admin/ListDoc");
  }

  function del(body) {
    return db.del(Table, body.Id);
  }
  return {
    getAll,
    find,
    add,
    del,
  };
};
