const products = require('../data/expandedProducts');

// Get all products
exports.getAllProducts = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get products by category
exports.getProductsByCategory = (req, res) => {
  try {
    const { category } = req.params;
    const filteredProducts = products.filter(
      product => product.category === category
    );
    
    res.status(200).json(filteredProducts);
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get single product
exports.getProduct = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find(p => p._id === id);
    
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found'
      });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all categories
exports.getCategories = (req, res) => {
  try {
    const categories = [...new Set(products.map(p => p.category))];
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
};
