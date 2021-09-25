const express = require('express') 

// express server instance
const server = express()

// server port
const server_port = 9000

// morgan class
const morgan = require('morgan')

// node cors
const cors = require('cors')

// body parser
server.use(express.json());
server.use(express.urlencoded({
  extended: true
}));

// morgan (activity logger)
server.use(morgan('combined'))

// cors middleware
server.use(cors())

// base route
const Base = require('./server/routes/index')

server.use('', Base)

// entry port
server.listen(server_port, ()=>{
    console.log(`server startd on http://127.0.0.1:${server_port}/`)
})