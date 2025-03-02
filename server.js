const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const authRouter = require('./controllers/auth')
const usersRouter = require('./controllers/users')
const productsRouter = require('./controllers/products')
const ordersRouter = require('./controllers/orders')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// Routes go here
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

app.listen( process.env.PORT || 3000, () => {
    console.log("The express app is ready")
})

