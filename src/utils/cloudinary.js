import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

// Upload an image
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log("File uploaded on Cloudinary:", response.url);

        // Remove file after successful upload
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);

        // Remove the file if upload fails
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export { uploadOnCloudinary };
