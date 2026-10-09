import dotenv from "dotenv"
import { DB_NAME } from "./constants.js"
import db_connetor from "./db/db.js"

dotenv.config()

/*second approach is that we take a separate file  */
db_connetor()
/*
import express from "express"
const app = express();
;( async () => { 
    try {
       await mongoose.connect( `${process.env.MONGO_URL}/${DB_NAME}`)
       app.on("error" , (error) => {
        console.log("ERROR" + error)
        throw error
       })
       app.listen(process.env,PORT, () => {
  console.log(`The app is listening on ${process.env.PORT}`)
})
    } catch (error) {
        console.log("ERROR : " + error);
        throw error;
    }
})()



this is the first approach to connect db with simply a iffy function with async await and try catch block in just a single index file evrything is there
*/