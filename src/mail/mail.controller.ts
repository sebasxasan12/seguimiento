import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from './dto/mail.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() maildto: MailDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.mailService.sendEmail(maildto, file);
  }
}
