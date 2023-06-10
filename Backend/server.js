import express from 'express'
import sql from 'mssql'
import cors from 'cors'
import config from './Database/dbConfig.js'

const port = 3000
const app = express()
//Middleware
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {console.log("Hello! I'm the Backend")})

//connect to database
sql.connect(config)
    .then((pool) => {
        console.log('Database connected successfully')
        //passing the pool to the app
        app.locals.db = pool
        app.listen(port, () => {console.log('Listening on port: http://localhost:' + port)})
    })
    .catch((err) => {
        console.log('Error on DB Connect -> ' + err)
    })