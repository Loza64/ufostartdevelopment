"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMessage = void 0;
const express_validator_1 = require("express-validator");
exports.ValidateMessage = [
    (0, express_validator_1.body)("name")
        .matches(/^[a-zA-ZÁ-ÿ\s]{10,40}$/).withMessage("Please enter valid name.")
        .isLength({ min: 10 }).withMessage("name must be at least 10 characters")
        .trim().notEmpty().withMessage("name must be required"),
    (0, express_validator_1.body)("email")
        .matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/).withMessage("Please enter valid email.")
        .isLength({ min: 10 }).withMessage("email must be at least 10 characters")
        .trim().notEmpty().withMessage("email must be required"),
    (0, express_validator_1.body)("business")
        .matches(/^[a-zA-ZÁ-ÿ\s]{8,30}$/).withMessage("Please enter valid businiess.")
        .isLength({ min: 8 }).withMessage("businiess must be at least 8 characters")
        .trim().notEmpty().withMessage("businiess must be required"),
    (0, express_validator_1.body)("message")
        .matches(/^[a-zA-ZÁ-ÿ0-9\s.,-]+$/).withMessage("Please enter a valid message.")
        .isLength({ min: 20, max: 343 }).withMessage("Message must be between 20 and 343 characters.")
        .trim().notEmpty().withMessage("Message is required."),
];
//# sourceMappingURL=message.js.map