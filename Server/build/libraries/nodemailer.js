"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_smtp_transport_1 = __importDefault(require("nodemailer-smtp-transport"));
const config_1 = require("../config");
const transporter = nodemailer_1.default.createTransport((0, nodemailer_smtp_transport_1.default)({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config_1.MailBussiness,
        pass: config_1.MailPass
    }
}));
async function SendEmail(mailmessage) {
    return await transporter.sendMail(mailmessage);
}
//# sourceMappingURL=nodemailer.js.map