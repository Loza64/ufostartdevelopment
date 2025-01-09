import { UploadedFile } from "express-fileupload";
import { body } from "express-validator";

const allowedTypes = ['Web', 'Desktop', 'Movil'];

export const ValidateProject = [
    body("type")
        .exists().withMessage("El tipo es requerido")
        .isIn(allowedTypes).withMessage(`El tipo debe ser uno de: ${allowedTypes.join(', ')}`)
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El tipo solo debe contener letras, números y espacios"), // Expresión regular que permite letras y números  

    body("title")
        .exists().withMessage("El título es requerido")
        .isString().withMessage("El título debe ser un texto")
        .isLength({ min: 1, max: 100 }).withMessage("El título debe tener entre 1 y 100 caracteres")
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El título solo debe contener letras, números y espacios"), // Permitir letras y números  

    body("description")
        .exists().withMessage("La descripción es requerida")
        .isString().withMessage("La descripción debe ser un texto")
        .isLength({ min: 1, max: 500 }).withMessage("La descripción debe tener entre 1 y 500 caracteres"),

    body("photo").custom((value, { req }) => {
        const photo = req.files?.photo as UploadedFile;
        if (!photo) {
            throw new Error("No se ha enviado ninguna imagen");
        }
        if (!photo.mimetype.includes("image")) {
            throw new Error("El archivo no es una imagen");
        }
        return true;
    }),
];

export const ValidateDetailProject = [
    body("name")
        .exists().withMessage("El name es requerido")
        .isString().withMessage("El name debe ser un texto")
        .isLength({ min: 1, max: 100 }).withMessage("El name debe tener entre 1 y 100 caracteres")
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El name solo debe contener letras, números y espacios"),

    body("photo").custom((value, { req }) => {
        const photo = req.files?.photo as UploadedFile;
        if (!photo) {
            throw new Error("No se ha enviado ninguna imagen");
        }
        if (!photo.mimetype.includes("image")) {
            throw new Error("El archivo no es una imagen");
        }
        return true;
    }),

]