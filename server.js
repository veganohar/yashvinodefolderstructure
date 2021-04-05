const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  
    extended: true
}));
app.listen(port,()=>{
    console.log(`Your Application is running on port number ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.set('view engine', 'ejs'); 
require("./app/routes/test.route")(app);