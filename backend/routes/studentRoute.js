const express = require('express');
const { studentController } = require('../controllers');
const { 
        fieldsValidateStudent, 
        idValidateStudent, 
        validateUpdateStudent, 
        authToken 
      } = require('../middlewares');

const router = express.Router();

router.post('/', authToken, fieldsValidateStudent, studentController.create)
router.get('/', authToken, studentController.getAll);
router.get('/:id', authToken, idValidateStudent, studentController.getOne);
router.put('/:id', authToken, idValidateStudent, validateUpdateStudent, studentController.update)
router.delete('/:id', authToken, idValidateStudent, studentController.remove);

module.exports = router;