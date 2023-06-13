const express = require('express')
const sql = require('mssql')
const cors = require('cors')
const config = require('./Database/dbConfig')

const port = 3000
const app = express()

//Middleware
app.use(cors());
app.use(express.json());

app.use('/api/videos', require('./Routes/videos'))

//connect to database
sql.connect(config)
    .then((pool) => {
        console.log('Database connected successfully')
        //passing the pool to the app
        app.locals.db = pool

        //start the server
        app.listen(port, () => {console.log('Listening on port: http://localhost:' + port)})
    })
    .catch((err) => {
        console.log('Error on DB Connect -> ' + err)
    })