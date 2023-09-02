const express = require("express")
const expressLayout = require("express-ejs-layouts")
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));  //for html images etc file
app.use(expressLayout);

app.set('layout', './layouts/main');
 app.set("view engine" , 'ejs')
//routes 
const routes = require('./server/routes/recipeRoute');
app.use('/' , routes);
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, PORT, function() {
    console.log(`listening at port ${PORT}`);
})