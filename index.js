const express = require("express");
const app = express();
const PORT = process.env.PORT || 2100;
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")
const path = require("path")
const cors = require('cors')
require('dotenv').config()
const bodyparser = require('body-parser')

//connecting to the database.....
mongoose.connect(process.env.CONNECTION_URL).then(()=>{console.log("Database connected")}).catch(error => console.log(error))

app.use('/api/citiride/', userRoutes);
app.use(bodyparser.json());
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render("home")
});

app.get('/register', (req,res)=>{
    res.render("register")
})

app.get('/login', (req,res)=>{
    res.render("login")
})

app.get('/learn', (req,res)=>{
    res.render("learn")
})


app.get('/drivers', (req,res)=>{
    res.render("drivers")
})


app.get('/dashboard', (req,res)=>{
    res.render("dashboard")
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});

module.exports = app;