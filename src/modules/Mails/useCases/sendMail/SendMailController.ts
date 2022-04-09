import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export class MailController {
    async handle(request: Request, response: Response){
        const { destinatary, subject, text } = request.body;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
            },
        });

        let info = await transporter.sendMail({
            from: '<joaosipauba@hotmail.com>',
            to: destinatary,
            subject: subject,
            text: text,
            html: "<b>Hello world?</b>",
        });
        
        return response.status(200).json(info);
    }
}