// imports dependencies
import express, { Router } from "express"
import cors from "cors"
import morgan from "morgan"

// local file dependencies
import { connectDbAndRunQueries } from './dbOps.js'
const router = Router()

// middlewares
router.use(cors())
router.use(express.json({ type: 'application/json' }))
router.use(morgan('dev'))

router.get('/getallusers', (req, res) => {
	connectDbAndRunQueries('getAllUsers', req, res)
})

export default router;
