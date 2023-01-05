const { Router } = require('express');
const { validate } = require('express-validation');

const userController = require('../controllers/user.controller');
const {
  listUsers,
  createUser,
} = require('../middlewares/validations/user.validation');

const router = Router();

router.route('/').get(validate(listUsers), userController.list);
router.route('/').post(validate(createUser), userController.create);

module.exports = router;
