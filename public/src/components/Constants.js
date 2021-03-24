// Constants 
const Constants = () => {
	const url = "http://localhost:3000/services"
	return {
		// base url
		url,
		// other APIs urls
		getAllUsers: `${url}/getallusers`,

		// all HTTP verbs
		methods: {
			GET: "GET",
			POST: "POST"
		}
	}
}

export default Constants;
