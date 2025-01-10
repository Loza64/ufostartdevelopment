import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";
import { Error } from "../config";
import { UploadedFile } from "express-fileupload";
import { remove } from "fs-extra";

interface ValidationError {
    type: string;
    path: string;
    msg: string;
    location: string;
}

export const validate = async (req: Request, res: Response, next: NextFunction) => {

    const validator = validationResult(req);
    const files = req.files?.photo as UploadedFile | UploadedFile[];

    if (!validator.isEmpty()) {
        const errors = validator.array() as ValidationError[];

        let data: Record<string, string> = errors.reduce((acc: Record<string, string>, error) => {
            acc[error.path] = error.msg;
            return acc;
        }, {});

        if (files && Array.isArray(files)) {
            files.map(item => {
                if (item && item.tempFilePath) {
                    try {
                        remove(item.tempFilePath);
                    } catch (err) {
                        console.error(`Error al eliminar el archivo ${item.tempFilePath}:`, err);
                    }
                }
            })
        } 
        
        if (files && !Array.isArray(files)) {
            try {
                remove(files.tempFilePath);
            } catch (err) {
                console.error(`Error al eliminar el archivo ${files.tempFilePath}:`, err);
            }
        }

        res.status(400).json({ status: "error", message: "Errores de validación de entrada", data });
        Error(data);
        return;
    }

    next();
};