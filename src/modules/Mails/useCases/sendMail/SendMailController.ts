import { Request, Response } from 'express';
import { SendMailUseCase } from './SendMailUseCase';

export class MailController {
    async handle(request: Request, response: Response){
        const { destinatary, subject, text } = request.body;

        const sendMailUseCase = new SendMailUseCase();
        const result = sendMailUseCase.execute({
            destinatary,
            subject,
            text
        })

        return response.status(200).json(result);
    }
}