import mongoose from 'mongoose'

import dotenv from 'dotenv'
import path from 'path'

const __dirname = path.resolve() // why __dirname is not working 
dotenv.config({path:path.resolve(__dirname , `.env`)}) 
// mongodb://localhost/cms
mongoose.connect(
    process.env.DBCONNECTION,
    //"mongodb+srv://iifl:iifl@iifl.atjph.mongodb.net/cms?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
).then(() => console.log("conncetd to db"))

mongoose.connection.on('error', (err) => {
    console.log(`DB connection err ${err.message}`)
})

export default mongoose