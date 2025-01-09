import debug from 'debug';
import environtment from 'dotenv/config';
import helmet from 'helmet';

environtment;

export const Success = debug('Application:[Success]')
export const Error = debug('Application:[Failure]')
export const Database = debug('Application:[Database]')
export const Session = debug('Application:[Session]')
export const Server = debug('Application:[Server]')
export const Email = debug('Application:[Email]')

export const ConnectionDB = process.env.MONGODB;
export const PORT = process.env.PORT;
export const ApiKey = process.env.APIKEY;
export const CloudName = process.env.CLOUDNAME;
export const ApiSecret = process.env.APISECRET;
export const MailBussiness = process.env.MAILBUSINESS;
export const MailPass = process.env.MAILPASS;
export const MailNotification = process.env.MAILNOTIFICATION;
export const Origin = process.env.ORIGIN;


export const Cors = { origin: Origin, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type'] }

export const HelmetConfig = helmet({
    xssFilter: true, // Habilitar protección contra XSS  
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }, // Configurar HSTS  
    frameguard: { action: 'deny' }, // No permitir iframes  
    dnsPrefetchControl: { allow: false }, // No pre-resolver dominios  
    referrerPolicy: { policy: 'no-referrer' } // No enviar información de referencia
})

export const LimiterConfig = {
    limit: 100,
    windowMs: 1000 * 60 * 10,
    handler: (req, res) => {
        res.status(429).json({
            error: "Too many requests",
            message: "The request's limit has been exceeded for this IP, please try again later."
        });
    }
}