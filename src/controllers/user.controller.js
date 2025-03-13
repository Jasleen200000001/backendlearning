import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const registerUser = asyncHandler( async(req,res)=>{
    //get user details from fronted
    //validation - not emptry / email validation
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    //check if user already exist: username , email
    // check for images, check for avatar
        // if there upload them to cloudinary, avatar 
    //create user object - create entry in db
    //remove password and refresh token field from resposne 
    //check for user cration 
    //return res

    //from form
    const {fullname, email, username, password } = req.body
    console.log("email:", email);

    if ([fullname, email, username, password].some((field)=>{
        field?.trim() === ""
    })){
        throw new ApiError ( 400 , "field is requre")
    }

    if (!isValidEmail(email)) {
        throw new ApiError(400, "Invalid email format. Please enter a valid email address.");
    }
    
    //check if user already exist: username , email
    const existedUser = User.findOne({
        $or: [{username},{email}]
    })
    if (existedUser){
        throw new ApiError(409, "user with email or username is alrady there and exists ")
    }


    // check for images, check for avatar
        

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    console.log(files)

    if (!avatarLocalPath){
        throw new ApiError(400,"avatar file is required")
    }
    // if there upload them to cloudinary, avatar 
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar){
        throw new ApiError(400, "avatar file is requred")
    }

    const user = await User.create({
        fullname,
        avatar : avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser){
        throw new ApiError(500,"something went worng")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "user registered success fully")
    )
})

export {registerUser}