import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongoose.config.js'
import router from './routes/soloproject.routes.js'

const app = express()
app.use(express.json(), cors())
dbConnect()
dotenv.config()

app.use('/api', router)










app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port: ${process.env.PORT}`)
})