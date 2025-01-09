import nodemailer from 'nodemailer';
import smtp from 'nodemailer-smtp-transport'
import { MailBussiness, MailPass } from '../config';

const transporter = nodemailer.createTransport(
  smtp({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MailBussiness,
      pass: MailPass
    }
  })
)

export interface MailBody {  
    from: string;
    to: string; 
    subject: string;
    html: string;
}

export default async function SendEmail(mailmessage:MailBody) {
  return await transporter.sendMail(mailmessage)
}
