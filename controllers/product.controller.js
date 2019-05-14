const Products = require('../models/product.model');

module.exports.get = async (req, res, next) => {
    const products = await Products.find();
    return res.json(products.map((product)=> product.toJSON()));
}

module.exports.post = async (req,res, next) => {
    const id = req.body.id;
    const oldProduct = await Products.findById(id);
    oldProduct.count += 1; 
    const product = await Products.findByIdAndUpdate(id, {count: oldProduct.count})
    return res.redirect('http://localhost:3000/');
    // return;
}