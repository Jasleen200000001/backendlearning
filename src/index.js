// require(dotenv).config({  path: '.env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import app from './app.js'


dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    console.log('\n mongodb connected to express server')
    app.listen(process.env.PORT,()=>{
        console.log(`connecting to express server on port :: ${process.env.PORT}`)
    })

    app.on('error',(err)=>{
        console.log(`error connecting to express server on port :: ${process.env.PORT}`)
        process.exit(1)
    })
        
})
.catch((err)=>{
    console.log(`error for mongodb connection :: ${err}`)
    process.exit(1)
})







/*
  Connecting to MongoDB


import mongoose from "mongoose"
import DB_NAME from "./constants"
import express from "express"
const app = express()
;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       //this is use for express compatibility with Mongoose
       app.on('error',(err)=>{
        console.error(err)
        throw err
       })
    }catch(err){
        console.error(err)
        throw err
    }
})()

*/