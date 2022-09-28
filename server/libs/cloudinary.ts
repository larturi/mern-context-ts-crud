import { v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath: string) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'mern-post'
    })
}

export const deleteImage = async (publicId: string) => {
    return await cloudinary.uploader.destroy(publicId);
}

