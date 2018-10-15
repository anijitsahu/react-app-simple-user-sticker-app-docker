// processing of req and send response

var sendResponse = function (req, res, users) {
	var index = req.params['index']	

	// let output = {"userList": [], "totalUsers": 0}
	let output = []
	let count = 0
	console.log('value of index right now: ', index)

	for (var i = index; i < users.length; i++) {
		count++
		if (count === 4) {
			break
		}
		output.push(users[i])
	}
	// output.totalUsers = users.length
	res.json(output)
}

var storeData = function (req, res, fs, users) {
	let id = users[users.length - 1]['id'] + 1
	let body = req.body
	body['id'] = id
	users.push(body)
	
	let filedata = JSON.stringify(users, null, '\t')
	fs.writeFile('./users.json', filedata)
	res.json('user added successfully..')
}
module.exports.sendResponse = sendResponse
module.exports.storeData = storeData