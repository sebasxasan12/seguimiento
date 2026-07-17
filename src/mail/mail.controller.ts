import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from './dto/mail.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Post()
  create(
    @Body() maildto: MailDto
  ) {
    console.log({ maildto })
    this.mailService.sendEmail(maildto);
  }
}
