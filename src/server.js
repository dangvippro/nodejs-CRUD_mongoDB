const express = require("express");
require("dotenv").config();

const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

require("./configs/viewEngine.config")(app);

app.get('/404', (req, res) => {
    res.render('404.ejs');
});

app.listen(port, hostname, () => {
    console.log(`
    ==============================================
    🚀 Server running at http://${hostname}:${port} 🚀
    ==============================================
    `);
});


// "start": "nodemon --exec babel-node src/server.js"