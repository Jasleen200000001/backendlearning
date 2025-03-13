// Importing necessary libraries
import express from 'express'; // Express framework for building web apps
import cors from 'cors'; // Middleware to handle cross-origin requests
import cookieParser from 'cookie-parser'; // Middleware to parse cookies

// Creating an instance of the Express app
const app = express();

// Setting up CORS (Cross-Origin Resource Sharing) to allow requests from specific domains
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Defines which domain(s) are allowed to access resources
    credentials: true // Allows cookies and authentication info to be sent
}));

// Middleware to parse incoming JSON data, with a size limit of 16KB
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data, with a size limit of 16KB
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serving static files (like images, CSS, JavaScript) from the "public" folder
app.use(express.static("public"));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());



//ROutes import
import userRouter from './routes/user.routes.js'



//routes declaration
app.use("/api/v1/users", userRouter)


// Export the app so it can be used elsewhere in the project
export default app;
