const express = require('express') 

// express server instance
const server = express()

// server port
const server_port = 7000

// morgan class
const morgan = require('morgan')

// node cors
const cors = require('cors')

// body parser
server.use(express.json());
server.use(express.urlencoded({
  extended: true
}));


//

// morgan (activity logger)
server.use(morgan('common'))

// cors middleware
server.use(cors())

// routes
const Base = require('./server/routes/index')
// const Users = require('./server/routes/users')
// const Projects = require('./server/routes/projects')
const Organization = require('./server/routes/organizatons')


server.use('', Base)
server.use('/organization', Organization)

// server.use('/users', Users)
// server.use('/projects', Projects)

// entry port
server.listen(server_port, ()=>{
    console.log(`server startd on http://127.0.0.1:${server_port}`)
})