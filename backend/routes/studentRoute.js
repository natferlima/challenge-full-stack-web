const express = require('express');
const { studentController } = require('../controllers');
const { fieldsValidateStudent, idValidateStudent } = require('../middlewares');

const router = express.Router();

router.post('/', fieldsValidateStudent, studentController.create)
router.get('/', studentController.getAll);
router.get('/:id', idValidateStudent, studentController.getOne);
router.put('/:id', idValidateStudent, studentController.update)
router.delete('/:id', idValidateStudent, studentController.remove);

module.exports = router;