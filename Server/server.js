require('dotenv').config();

const app = require('./app')
const mongoose = require('mongoose')

const connection_str = process.env.LOCAL_DB_URL
const port = process.env.PORT || 3000

//DB Connection
mongoose.connect(connection_str).then(() => {
    console.log('DB connected')
}).catch((error) => {
    console.log('Error:', error)
})


app.listen(port, () => {
    console.log(`Server started at ${port}`)
})