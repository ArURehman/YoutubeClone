import express from 'express'
import connectDB from './Database/dbConnect.js'

const app = express()
const port = 4000

connectDB()

app.get('/', (req, res) => {console.log("Hello! I'm the Backend")})

app.listen(port, () => {console.log('Listening on port: http://localhost:' + port)})