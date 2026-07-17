import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { OrdenModule } from './orden/orden.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    }),
    UsuariosModule,
    OrdenModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        }
      },
      // defaults: {
      //   from: '"Correo de Prueba" <caraveli@cmc.com.pe>'
      // }
    },
    ),
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
