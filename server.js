"use strict";
const express = require('express');
const path = require('path');
const app = express();
console.log(__dirname)
app.get('/', (req, res) => {
	res.send('okely dokely')
})
//app.use(express.static(path.join(__dirname, 'public')));
app.listen('3000', () => console.log('listening. . . .'))
