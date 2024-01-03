const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../config/upload');

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const UserControllers = require("../controllers/UserControllers");
const UserAvatarControllers = require('../controllers/UserAvatarControllers');

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const userControllers = new UserControllers();
const userAvatarControllers = new UserAvatarControllers();

userRoutes.post('/', userControllers.create);
userRoutes.put('/', ensureAuthenticated, userControllers.update);

userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarControllers.update);

module.exports = userRoutes;