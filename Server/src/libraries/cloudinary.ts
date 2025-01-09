import cloudinary from 'cloudinary';
import { CloudName, ApiKey, ApiSecret, Error as ConfigError } from '../config';

cloudinary.v2.config({
    cloud_name: CloudName,
    api_key: ApiKey,
    api_secret: ApiSecret,
});

export default async function UploadImage(image: string) {
    try {
        return await cloudinary.v2.uploader.upload(image, { folder: "UFOSTARTIMG" })
    } catch (error) {
        throw new Error(`upload to cloudinary: ${error.message}`);
    }
}