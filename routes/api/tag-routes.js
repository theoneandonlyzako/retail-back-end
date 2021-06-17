const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models/Index');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log('======================');
  Category.findAll({

  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log('======================');
  Category.findOne({
    
  })
});

router.post('/', (req, res) => {
  // create a new tag

  Category.create({
    
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Category.update({
    
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
