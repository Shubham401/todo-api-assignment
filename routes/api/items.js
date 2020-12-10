const express = require('express');
const router = express.Router();
const {getItem, postItem, deleteItem} = require('../../controller/item');



//GET api/items
router.get('/', getItem);

//POST api/items
router.post('/', postItem);

//DELETE api/items/:id
router.delete('/:id', deleteItem);



module.exports = router;