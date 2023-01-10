const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");

routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;

// Lugar onde todas as rotas ficarão agrupadas e farão ligação com o servidor principal;