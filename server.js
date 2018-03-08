"use strict";
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var users = require('./routes/users');
app.use('/users', users);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 5000, () => console.log('listening. . . .'))
