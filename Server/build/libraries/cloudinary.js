"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UploadImage;
const cloudinary_1 = __importDefault(require("cloudinary"));
const config_1 = require("../config");
cloudinary_1.default.v2.config({
    cloud_name: config_1.CloudName,
    api_key: config_1.ApiKey,
    api_secret: config_1.ApiSecret,
});
async function UploadImage(image) {
    try {
        return await cloudinary_1.default.v2.uploader.upload(image, { folder: "UFOSTARTIMG" });
    }
    catch (error) {
        throw new Error(`upload to cloudinary: ${error.message}`);
    }
}
//# sourceMappingURL=cloudinary.js.map