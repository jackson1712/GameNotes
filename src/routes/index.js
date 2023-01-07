const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./users.routes");

routes.use("/users", usersRoutes)

module.exports = routes;

// Lugar onde todas as rotas ficarão agrupadas e farão ligação com o servidor principal;