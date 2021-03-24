// Constants 
class Constants {
	constructor() {
		// base url
		this.url = "http://localhost:3000/services";

		// other APIs urls
		this.getAllUsers = `${this.url}/getallusers`

		// all HTTP verbs
		this.methods = {
			GET: "GET",
			POST: "POST"
		}
	}
}

export default Constants;