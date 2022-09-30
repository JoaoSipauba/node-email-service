import nodemailer from 'nodemailer';

interface ISendMail {
    destinatary: string
    subject: string
    text: string
}

export class SendMailUseCase {
    async execute({ destinatary, subject, text }: ISendMail){
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Precisa ter um destinatario
        if (!destinatary) {
            throw new Error("Destinatary doesnt exists")
        }
        // precisa ter um assunto
        if (!subject) {
            throw new Error("Subject doesnt exists")
        }

        try {
            let info = await transporter.sendMail({
                from: '<joaosipauba@hotmail.com>',
                to: destinatary,
                subject: subject,
                text: text,
                html: "<b>Hello world?</b>",
            });
    
            return info;
        } catch (error) {
            return (error)
        }
    }
}