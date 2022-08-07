const express = require('express');
const { studentController } = require('../controllers');
const { fieldsValidateStudent, idValidateStudent, validateUpdateStudent } = require('../middlewares');

const router = express.Router();

router.post('/', fieldsValidateStudent, studentController.create)
router.get('/', studentController.getAll);
router.get('/:id', idValidateStudent, studentController.getOne);
router.put('/:id', idValidateStudent, validateUpdateStudent, studentController.update)
router.delete('/:id', idValidateStudent, studentController.remove);

module.exports = router;