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

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const validator = validationResult(req);

    const file = req.files?.photo as UploadedFile
    if (file) remove(file.tempFilePath)

    if (!validator.isEmpty()) {

        const errors = validator.array() as ValidationError[];

        let data: Record<string, string> = errors.reduce((acc: Record<string, string>, error) => {
            acc[error.path] = error.msg;
            return acc;
        }, {});

        res.status(400).json({ status: "error", message: "Errores de validación de entrada", data });

        Error(data);
        return;
    }

    next();
};