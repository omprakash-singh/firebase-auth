const express = require('express');
const authController = require('../controllers/authController');
const routes = express.Router();

routes.route('/').post(authController.postUser);
routes.route('/login').post(authController.loginUser);
routes.route('/check').get(authController.checkLogin);
routes.route('/verify').get(authController.verifyEmail);
routes.route('/logout').get(authController.logout);
// routes.route('/upload').post(authController.fileUpload);
routes.route('/getdata').get(authController.getData);

module.exports = routes;