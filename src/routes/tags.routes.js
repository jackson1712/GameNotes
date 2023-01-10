const { Router } = require("express");
const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();


const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;

// Definição das rotas da tabela do usuário. tanto criação como atualização
// ex: (UsersController, métodos(create, update))