const knex = require("../database/knex");

class NotesController {
    async create(request, response) {
        const { title, description, tags } = request.body;
        const { user_id } = request.params;

        const note_id = await knex("SELECT * FROM users WHERE id = (?)", [id])
    }
}

module.exports = NotesController;