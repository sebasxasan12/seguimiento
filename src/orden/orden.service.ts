import { Injectable } from '@nestjs/common';
import { Orden } from './entities/orden.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { User } from './entities/user.entity';

@Injectable()
export class OrdenService {

  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findByUnit() {
    try {
      const registros = await this.ordenRepository.createQueryBuilder('a')
        .innerJoin('a.responsable', 'login')
        .innerJoin('login.userF', 'user')
        .select(`case when user.unidad = 1 then 'TOCOTA' else 'HUAYLILLAS' end`, 'unidad')
        .addSelect('count(user.unidad)', 'cantidad')
        .groupBy('user.unidad')
        .getRawMany();
      return registros;
    } catch (error) {
      throw new Error(`El error:  ${error}`)
    }
  }

  async findByDate() {
    const registrosTocota = await this.ordenRepository.createQueryBuilder('a')
      .innerJoin('a.responsable', 'login')
      .innerJoin('login.userF', 'user')
      .select(`convert(date, a.fechCrea)`, 'fecha')
      .addSelect('count(convert(date, a.fechCrea))', 'cantidad')
      .groupBy('convert(date, a.fechCrea)')
      .where('user.unidad =:idUnidad', { idUnidad: 1 })
      .getRawMany();

    const registrosHuaylillas = await this.ordenRepository.createQueryBuilder('a')
      .innerJoin('a.responsable', 'login')
      .innerJoin('login.userF', 'user')
      .select(`convert(date, a.fechCrea)`, 'fecha')
      .addSelect('count(convert(date, a.fechCrea))', 'cantidad')
      .groupBy('convert(date, a.fechCrea)')
      .where('user.unidad =:idUnidad', { idUnidad: 2 })
      .getRawMany();
    return {
      'TOCOTA': registrosTocota,
      'HUAYLILLAS': registrosHuaylillas
    };
  }

  // create(createOrdenDto: CreateOrdenDto) {
  //   return 'This action adds a new orden';
  // }

  // findAll() {
  //   return `This action returns all orden`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} orden`;
  // }

  // update(id: number, updateOrdenDto: UpdateOrdenDto) {
  //   return `This action updates a #${id} orden`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} orden`;
  // }
}
