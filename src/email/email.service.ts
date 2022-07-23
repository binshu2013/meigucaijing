import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailMsgDto } from './email.dto';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService, private readonly configService: ConfigService) { }

    async sendEmail(emailMsg: EmailMsgDto) {
        const text = emailMsg.username ? `${emailMsg.subject}\nMessage by User Name:${emailMsg.username}` : emailMsg.subject;
        return await this.mailerService.sendMail({
            to: this.configService.get<string>('EMAIL_RECIPIENT'),
            from: emailMsg.email,
            subject: emailMsg.subject,
            text: `${text}`
        });
    }
}
