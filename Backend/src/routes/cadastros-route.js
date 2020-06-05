
const express = require('express');

const router = express.Router();
const controller = require('../controllers/cadastros-controller');


router.post('/', controller.post);
router.get('/:cpf', controller.getByCpf);

module.exports  = router;
