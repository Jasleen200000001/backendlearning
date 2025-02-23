import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
      const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongooseDB connected !! host :${connection_instance.connection.host}`)

    }catch(err){
        console.log("Failed to connect to mongoDB",err);
        // Exit process with failure status code 1 if connection fails.
        process.exit(1);
        
    }
}

export default connectDB;