"use strict";
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var users = require('./routes/users');


let middleware = (res, req, next) =>{
	console.log('hi')
	next();
}
app.use(middleware);
app.post("/", (req, res) => {
	console.log(req)
})
app.use('/users', users);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 5000, () => console.log('listening. . . .'))
