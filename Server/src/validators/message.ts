import { body } from "express-validator";

export const ValidateMessage = [
    body("name")
        .matches(/^[a-zA-ZÁ-ÿ\s]{10,40}$/).withMessage("Please enter valid name.")
        .isLength({ min: 10 }).withMessage("name must be at least 10 characters")
        .trim().notEmpty().withMessage("name must be required"),

    body("email")
        .matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/).withMessage("Please enter valid email.")
        .isLength({ min: 10 }).withMessage("email must be at least 10 characters")
        .trim().notEmpty().withMessage("email must be required"),

    body("business")
        .matches(/^[a-zA-ZÁ-ÿ\s]{8,30}$/).withMessage("Please enter valid businiess.")
        .isLength({ min: 8 }).withMessage("businiess must be at least 8 characters")
        .trim().notEmpty().withMessage("businiess must be required"),

    body("message")
        .matches(/^[a-zA-ZÁ-ÿ0-9\s.,-]+$/).withMessage("Please enter a valid message.")
        .isLength({ min: 20, max: 343 }).withMessage("Message must be between 20 and 343 characters.")
        .trim().notEmpty().withMessage("Message is required."),

]