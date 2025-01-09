"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const config_1 = require("../config");
const fs_extra_1 = require("fs-extra");
const validate = (req, res, next) => {
    const validator = (0, express_validator_1.validationResult)(req);
    const file = req.files?.photo;
    if (file)
        (0, fs_extra_1.remove)(file.tempFilePath);
    if (!validator.isEmpty()) {
        const errors = validator.array();
        let data = errors.reduce((acc, error) => {
            acc[error.path] = error.msg;
            return acc;
        }, {});
        res.status(400).json({ status: "error", message: "Errores de validación de entrada", data });
        (0, config_1.Error)(data);
        return;
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=result.js.map