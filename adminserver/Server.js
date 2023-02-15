const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const app = express()
const config=require('./Config/Config')
const userRouter=require('../adminserver/router/userrouter')
const db=require('./model/index')
const port = 8080
mongoose.set('strictQuery', true)
const corsOptions={
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(userRouter)


db.mongoose.connect(`mongodb+srv://${config.userName}:${config.password}@cluster0.tt9fmfb.mongodb.net/?retryWrites=true&w=majority`,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: config.dbName
}).then(()=>console.log('db is connected....'))
.catch((err)=>console.log('DB connection is fail',err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))