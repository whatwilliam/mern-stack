//Express Init
const express = require('express');
const app = express();

//Cross Origin Resource Sharing Init
const cors = require('cors');

//set environmental variables at config.env
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
 
const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) {
            console.error(err);
        }
    });
    console.log('Server is running on port: ${port}');

});