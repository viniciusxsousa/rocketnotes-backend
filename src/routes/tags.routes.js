const { Router } = require("express");

const tagsRoutes = Router();

const TagsControllers = require("../controllers/TagsControllers");

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const tagsControllers = new TagsControllers();

tagsRoutes.get('/', ensureAuthenticated ,tagsControllers.all);

module.exports = tagsRoutes;