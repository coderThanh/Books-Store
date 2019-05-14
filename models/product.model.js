const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    img: String,
    price: String,
    count: Number
    }, { timestamps: { createdAt: 'created_at' } }
);

productSchema.methods.toJSON = function() {
    return {
        _id: this.id,
        name: this.name,
        img: this.img,
        price: this.price,
        count: this.count,
        createAt: this.createAt,
        updateAt: this.updateAt
    }
}

const Products = mongoose.model('Products', productSchema, 'products');

module.exports = Products;