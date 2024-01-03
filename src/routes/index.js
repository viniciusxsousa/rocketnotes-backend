const { Router } = require("express");

const routes = Router();

const userRoutes = require('./user.routes');
const noteRoutes = require('./note.routes');
const tagsRoutes = require('./tags.routes');
const sessionRoute = require('./sessions.routes');


routes.use("/user", userRoutes);
routes.use("/note", noteRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/session", sessionRoute)

module.exports = routes