import { GetMessages, SaveMessage, IMessage } from "../model/messages";
import SendEmail from "../libraries/nodemailer";
import { Email, MailBussiness, MailNotification } from "../config";
import uniquid from 'uniquid'
import { NextFunction, Request, Response } from "express";

export const Message = async (req: Request, res: Response, next: NextFunction) => {

    const data: IMessage = req.body
    const address = req.headers['x-forwarded-for'];

    data.key = uniquid()
    data.date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    data.ip = Array.isArray(address) ? address[0] : address || req.socket.remoteAddress

    try {
        const upload = await SaveMessage(data)
        if (upload) {
            SendEmail({
                from: MailBussiness,
                to: MailNotification,
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
                Email(`Send with id: ${data.messageId}`)
                res.status(200).json({ state: true, details: "Gracias por contactarnos. Te enviaremos el presupuesto por correo pronto." });
            })
        }
    } catch (error) {
        res.status(500).json({ state: false, details: error.message })
    }
};


export const Messages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const messages = await GetMessages()
        res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json({ state: false, details: error.message })
    }
}