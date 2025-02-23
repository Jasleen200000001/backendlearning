// require(dotenv).config({  path: '.env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './.env'
})



connectDB()







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