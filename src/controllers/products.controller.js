const Products = require("../models/products.model");

class ProductCtrl {
    async index(req, res) {
        try {
            const instance = await Products.find({});
            res.render("products/index", {products: instance});
        } catch (error) {
            console.log('fail');
        }
    };

    showFormCreateProduct(req, res) {
        res.render("products/create");
    };

    create(req, res) {
        const newProduct = new Products({
            name: req.body.proName,
            price: req.body.proPrice,
            type: req.body.proType,
            qty: req.body.proQty
        });

        newProduct.save()
            .then(doc => {
                res.redirect("/");
            })
            .catch(err => {
                console.log('Error: ', err);
                throw err;
            });
    };

    async showFormUpdateProduct(req, res) {
        try {
            const product = await Products.findById(req.params.id);
            res.render("products/update", { product: product });
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            await Products.findByIdAndUpdate(
                { _id: id },
                { $set: { name: req.body.proName, price: req.body.proPrice, type: req.body.proType, qty: req.body.proQty } },
                { useFindAndModify: false }
            );
            res.redirect("/");
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deleted = await Products.findByIdAndDelete(id);
            // res.send(deleted);
            res.redirect('/');
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    async deleteMultipleProduct(req, res) {
        try {
            const ids = JSON.parse(req.query.ids);
            await Products.deleteMany({_id:{$in:ids}});
            res.redirect('/');

        } catch (err) {
            console.log("Error: ", err);
        }
    }
}

module.exports = new ProductCtrl();