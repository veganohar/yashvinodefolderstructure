const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const dbconfig = require("./app/config/db.config");
const db = require("./app/models");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(port, () => {
    console.log(`Your Application is running on port number ${port}`);
})

db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("DB Connected Successfully"); 
}).catch((err)=>{
        console.log(err);
        process.exit();
})


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.set('view engine', 'ejs');
require("./app/routes/test.route")(app);
