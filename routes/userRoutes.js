const { Router } = require('express');
const {
  register,
  login,
  loginRequired,
  auth,
} = require('../controllers/userController');

const router = Router();

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/auth').get(loginRequired, auth);

module.exports = router;
