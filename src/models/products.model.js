const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    price: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: 'No Category'
    },
    qty: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('product', productSchema);