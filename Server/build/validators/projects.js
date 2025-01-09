"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateDetailProject = exports.ValidateProject = void 0;
const express_validator_1 = require("express-validator");
const allowedTypes = ['Web', 'Desktop', 'Movil'];
exports.ValidateProject = [
    (0, express_validator_1.body)("type")
        .exists().withMessage("El tipo es requerido")
        .isIn(allowedTypes).withMessage(`El tipo debe ser uno de: ${allowedTypes.join(', ')}`)
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El tipo solo debe contener letras, números y espacios"), // Expresión regular que permite letras y números  
    (0, express_validator_1.body)("title")
        .exists().withMessage("El título es requerido")
        .isString().withMessage("El título debe ser un texto")
        .isLength({ min: 1, max: 100 }).withMessage("El título debe tener entre 1 y 100 caracteres")
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El título solo debe contener letras, números y espacios"), // Permitir letras y números  
    (0, express_validator_1.body)("description")
        .exists().withMessage("La descripción es requerida")
        .isString().withMessage("La descripción debe ser un texto")
        .isLength({ min: 1, max: 500 }).withMessage("La descripción debe tener entre 1 y 500 caracteres"),
    (0, express_validator_1.body)("photo").custom((value, { req }) => {
        const photo = req.files?.photo;
        if (!photo) {
            throw new Error("No se ha enviado ninguna imagen");
        }
        if (!photo.mimetype.includes("image")) {
            throw new Error("El archivo no es una imagen");
        }
        return true;
    }),
];
exports.ValidateDetailProject = [
    (0, express_validator_1.body)("name")
        .exists().withMessage("El name es requerido")
        .isString().withMessage("El name debe ser un texto")
        .isLength({ min: 1, max: 100 }).withMessage("El name debe tener entre 1 y 100 caracteres")
        .matches(/^[a-zA-Z0-9\s]+$/).withMessage("El name solo debe contener letras, números y espacios"),
    (0, express_validator_1.body)("photo").custom((value, { req }) => {
        const photo = req.files?.photo;
        if (!photo) {
            throw new Error("No se ha enviado ninguna imagen");
        }
        if (!photo.mimetype.includes("image")) {
            throw new Error("El archivo no es una imagen");
        }
        return true;
    }),
];
//# sourceMappingURL=projects.js.map