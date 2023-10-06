const mongoose = require('mongoose');

const mongodb_url = "mongodb://127.0.0.1:27017/CRUD_MongoDB";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
        .then(() => {
            console.log("Database connect successfully");
        })
        .catch(err => {
            console.log("Database connect error");
        });
    }
}

module.exports = new Database();