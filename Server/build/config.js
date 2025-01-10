"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimiterConfig = exports.HelmetSettings = exports.CorsConfig = exports.Origin = exports.MailNotification = exports.MailPass = exports.MailBussiness = exports.ApiSecret = exports.CloudName = exports.ApiKey = exports.PORT = exports.ConnectionDB = exports.Email = exports.Server = exports.Session = exports.Database = exports.Error = exports.Success = void 0;
const debug_1 = __importDefault(require("debug"));
const config_1 = __importDefault(require("dotenv/config"));
const helmet_1 = __importDefault(require("helmet"));
config_1.default;
exports.Success = (0, debug_1.default)('Application:[Success]');
exports.Error = (0, debug_1.default)('Application:[Failure]');
exports.Database = (0, debug_1.default)('Application:[Database]');
exports.Session = (0, debug_1.default)('Application:[Session]');
exports.Server = (0, debug_1.default)('Application:[Server]');
exports.Email = (0, debug_1.default)('Application:[Email]');
exports.ConnectionDB = process.env.MONGODB;
exports.PORT = process.env.PORT;
exports.ApiKey = process.env.APIKEY;
exports.CloudName = process.env.CLOUDNAME;
exports.ApiSecret = process.env.APISECRET;
exports.MailBussiness = process.env.MAILBUSINESS;
exports.MailPass = process.env.MAILPASS;
exports.MailNotification = process.env.MAILNOTIFICATION;
exports.Origin = process.env.ORIGIN;
exports.CorsConfig = { origin: exports.Origin, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type'] };
exports.HelmetSettings = (0, helmet_1.default)({
    xssFilter: true, // Habilitar protección contra XSS  
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }, // Configurar HSTS  
    frameguard: { action: 'deny' }, // No permitir iframes  
    dnsPrefetchControl: { allow: false }, // No pre-resolver dominios  
    referrerPolicy: { policy: 'no-referrer' } // No enviar información de referencia
});
exports.LimiterConfig = {
    limit: 100,
    windowMs: 1000 * 60 * 10,
    handler: (req, res) => {
        res.status(429).json({
            error: "Too many requests",
            message: "The request's limit has been exceeded for this IP, please try again later."
        });
    }
};
//# sourceMappingURL=config.js.map