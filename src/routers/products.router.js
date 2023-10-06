const router = require('express').Router();
productCtrl = require('../controllers/products.controller');

module.exports = (app) => {
    router.get('/', productCtrl.index);
    router.get('/create-product', productCtrl.showFormCreateProduct);
    router.post('/create-product', productCtrl.create);
    router.get('/update-product/:id', productCtrl.showFormUpdateProduct);
    router.post('/update-product/:id', productCtrl.update);
    router.get('/delete-product/:id', productCtrl.delete);
    router.get('/deleteMultipleProduct', productCtrl.deleteMultipleProduct);
    app.use('/', router);
};