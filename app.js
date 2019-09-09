const express = require('express')
const app = express()

// Import router e controller
const indexRouter = require('./src/index')
const userRoutes = require('./src/controller/user')

const port = process.env.PORT || 3001


const db = require('./src/config/db')

// Body-Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cors)


// Rotas
app.use('/', indexRouter)
app.use('/user', userRoutes)


// Config da Porta
app.listen(port, (req, res) => {
    console.log(`running API on port: ${port}`)
    console.log("To knock down press: CRTL + C")

})