const { Router } = require('express');
const { validate } = require('express-validation');

const { userController } = require('../controllers');
const { userValidation } = require('../middlewares/validations');

const router = Router();

router.route('/').get(validate(userValidation.listUsers), userController.list);
router
  .route('/')
  .post(validate(userValidation.createUser), userController.create);

module.exports = router;
