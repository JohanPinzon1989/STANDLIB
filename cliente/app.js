const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const cookiesParse = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Setar motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Setear carpeta public para archivos externos
app.use(express.static("public/"));

//Procesar datos enviados desde formularios
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setear variables de entorno
dotenv.config();

//Setear las cookies
app.use(cookiesParse());

//Lammar al router
app.use("/", require("./routes/router"));

const port = process.env.PORT_SER;

app.listen(port || 4000, () => {
  console.log("Server up running: "+ port);
});
