const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../public')));
    
    // Middle Wave <> middervare
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    // Connect to MongoDB
    require("../models/db")._connect();

    // Router
    require("../routers/products.router")(app);
};
