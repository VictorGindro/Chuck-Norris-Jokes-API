const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

// test
router.get('/test', user_controller.test);

// create
router.post('/create', user_controller.user_create);

// find one
router.get('/find/:email/:senha', user_controller.user_find_one);

// find all
router.get('/findAll', user_controller.user_find_all);

// find by id
router.get('/:id', user_controller.user_details);

// update
router.put('/:id/update', user_controller.user_update);

// delete
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;