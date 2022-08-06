const express = require('express');
const { studentController } = require('../controllers');

const router = express.Router();

router.post('/', studentController.create)
router.get('/', studentController.getAll);
router.get('/:id', studentController.getOne);
router.put('/:id', studentController.update)
router.delete('/:id', studentController.remove);

module.exports = router;