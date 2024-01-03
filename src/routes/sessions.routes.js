const { Router } = require('express');

const SessionsControllers = require('../controllers/SessionsControllers');
const sessionsControllers = new SessionsControllers();

const sessionRoute = Router();

sessionRoute.post('/', sessionsControllers.create);

module.exports = sessionRoute