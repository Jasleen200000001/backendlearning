import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videosSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String ,// cloudnery
            require: true
        },
        thumbnail:{
            type:String ,// cloudnery
            require: true
        },        
        thumbnail:{
            type:String ,
            require: true
        },        
        owner:{
            type: mongoose.Schema.Types.ObjectId ,
            ref:"User"
        },        
        description:{
            type:String ,
            require: true
        },
        duration:{
            type:String ,// cloudnery
            require: true
        },        
        views:{
            type:Number ,// cloudnery
            default: true
        },
        videoFile:{
            type:String ,// cloudnery
            require: true
        },
        isPublished:{
            type:Boolean,
            require: true
        }
    },
    {
        timestamps:true
    }
)

videosSchema.plugin(mongooseAggregatePaginate)

export const Videos = mongoose.model('Videos', userSchema)