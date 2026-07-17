import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Login } from './entities/login.entity';
import { User } from './entities/user.entity';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
  imports: [TypeOrmModule.forFeature([Orden, Login, User])]
})
export class OrdenModule { }
