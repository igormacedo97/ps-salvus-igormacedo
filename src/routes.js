const express = require("express");
const PatientsController = require("./controllers/PatientsController");

const routes = express.Router();

//INDEX
routes.get("/patients", PatientsController.index);
routes.post("/patients", PatientsController.create);
routes.get("/patients/:id", PatientsController.show);
routes.put("/patients/:id", PatientsController.update);
routes.delete("/patients/:id", PatientsController.destroy);

module.exports = routes;
