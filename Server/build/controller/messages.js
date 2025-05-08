"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = exports.Message = void 0;
const messages_1 = require("../model/messages");
const nodemailer_1 = __importDefault(require("../libraries/nodemailer"));
const config_1 = require("../config");
const uniquid_1 = __importDefault(require("uniquid"));
const Message = async (req, res, next) => {
    const data = req.body;
    const address = req.headers['x-forwarded-for'];
    data.key = (0, uniquid_1.default)();
    data.date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    data.ip = Array.isArray(address) ? address[0] : address || req.socket.remoteAddress;
    try {
        const upload = await (0, messages_1.SaveMessage)(data);
        if (upload) {
            (0, nodemailer_1.default)({
                from: config_1.MailBussiness,
                to: config_1.MailNotification,
                subject: "NUEVO CLIENTE UFOSTART",
                html: `
                    <p>
                    Un nuevo cliente identificado como: ${data.name} se a contactado atravez de tu pagina web 
                    <a href='https://ufostartdevelopment.vercel.app/'>UFOSTART DEVELOPMENT</a> con el correo: ${data.email}, 
                    la clave de identificacion del cliente es: <label style='color:red; font-weight: 900;'>${data.key} </label>, 
                    el mensaje dice lo siguiente:
                    </p>
                    <p>${data.message}</p>
                    `
            }).then((data) => {
                (0, config_1.Email)(`Send with id: ${data.messageId}`);
                res.status(200).json({ state: true, details: "Gracias por contactarnos. Te enviaremos el presupuesto por correo pronto." });
            });
        }
    }
    catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
};
exports.Message = Message;
const Messages = async (req, res, next) => {
    try {
        const messages = await (0, messages_1.GetMessages)();
        res.status(200).json(messages);
    }
    catch (error) {
        return res.status(500).json({ state: false, details: error.message });
    }
};
exports.Messages = Messages;
//# sourceMappingURL=messages.js.map