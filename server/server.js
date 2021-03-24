// imports dependencies
import express from 'express'
const app = express()

// router
import router from './routes.js'

// PORT 3000
const PORT = 3000

// serve the static pages
app.use(express.static('../dist'))

app.use('/services', router)
app.listen(PORT, () => {
	console.log('Server is running on ', PORT)
})