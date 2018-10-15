// imports dependencies
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fs = require('fs')

// local dependencies
var query = require('./query')
var users = require('./users.json')

app.use(bodyParser.json())
app.use(express.static('../public'))

// serve the home page
app.get('/', function (req, res) {
	res.send('index.html')
})

// simplified using JSON for users, no password 
app.get('/getdata/:index', (req, res) => {
	query.sendResponse(req, res, users)
})

// add user api
app.post('/adduser', (req, res) => {
	query.storeData(req, res, fs, users)
})

// listen
app.listen(3000, function () {
	console.log('Server is running')
})