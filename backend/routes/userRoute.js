const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.create)
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.delete('/:id', userController.remove);

module.exports = router;