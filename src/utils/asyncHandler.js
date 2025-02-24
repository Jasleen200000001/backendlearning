const asyncHandler = (requestHandler)=>{
    Promise.resolve(requestHandler(req,res,next ))
    .catch((err)=> next(err))
}

export {asyncHandler}

/*
const asyncHandler = (fn) => async(req,res,next) => {
    try{
        await fn(req,res,next)
    }catch(err){
        res.status(err.code).json({
            sucess:false,
            message: err.message
        })
    }
}
*/