const mongoose = require('mongoose')

const url = 'mongodb+srv://usuario_admin:everton3b@cluster0-lqciw.mongodb.net/commenting-systems?retryWrites=true&w=majority'

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

mongoose.connect('mongodb://localhost:27017/commenting-systems', {useNewUrlParser: true})
// mongoose.connect(url, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to databases: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Application disconnected from database!')
})
mongoose.connection.once('connected',  () => {
    console.log('Database-connected application!')
})
