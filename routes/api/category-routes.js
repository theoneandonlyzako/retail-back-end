const router = require('express').Router();
const { Category, Product } = require('../../models/Index');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  console.log('======================');
  Category.findAll({
    attributes: [
      'id',
      'category_name',
    ],
    include: [
      // include the Comment model here:
      {
        model: Product,
        attributes: ['id', 'category_name', ],
        
      },
    ]
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
