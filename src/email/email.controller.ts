import { Body, Controller, Post } from '@nestjs/common';
import { EmailMsgDto } from './email.dto';
import { EmailService } from './email.service';
import { SentMessageInfo } from 'nodemailer';

@Controller()
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Post('/sendMail')
    async sendEmail(@Body() emailMsg: EmailMsgDto) {
        console.log(emailMsg);
        await this.emailService.sendEmail(emailMsg);
        return 'OK';
    }

}
