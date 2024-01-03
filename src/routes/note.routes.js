const { Router } = require("express");

const notesRoutes = Router();

const NotesControllers = require("../controllers/NotesControllers");

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

notesRoutes.use(ensureAuthenticated)

const notesControllers = new NotesControllers();

notesRoutes.get('/', notesControllers.all);
notesRoutes.post('/', notesControllers.create);
notesRoutes.get('/:id', notesControllers.show);
notesRoutes.delete('/:id', notesControllers.delete);

module.exports = notesRoutes;