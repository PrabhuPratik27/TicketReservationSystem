const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const routes = require('./routes')
const dbconnect = require('./dbconnect')


const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

routes(app)

dbconnect()

app.listen(8000, () => {
	console.log('Server started on port 8000');
});