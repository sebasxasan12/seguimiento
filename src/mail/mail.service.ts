import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mail.dto';

@Injectable()
export class MailService {

  constructor(
    private readonly mailerService: MailerService
  ) { }

  async sendEmail(mailDto: MailDto, file: Express.Multer.File) {
    const { path, recipients = [] } = mailDto;
    console.log(recipients, typeof recipients)
    recipients.push('ingsebastianc@hotmail.com')
    await this.mailerService.sendMail({
      to: recipients,
      from: 'caraveli@cmc.com.pe',
      subject: 'Reportes de Órdenes de Trabajo',
      text: 'Este es un mensaje de prueba desde NestJS',
      html: '<h1>REPORTE DE ÓRDENES DE TRABAJO</h1>',
      attachments: [
        {
          filename: 'reporte_unidad.xlsx',
          content: Buffer.from(file.buffer)
        }
      ]
    })
    return "ok";
  }


}
