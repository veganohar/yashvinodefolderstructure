const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`Your Application is running on port number ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

require("./app/routes/test.route")(app);