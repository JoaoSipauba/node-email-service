import { Router } from 'express';
import { MailController } from './modules/Mails/useCases/sendMail/SendMailController';

const routes = Router();

const mailController = new MailController();

routes.post('/mail', mailController.handle);

export { routes }