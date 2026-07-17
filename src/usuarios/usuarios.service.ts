import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { name } = createUsuarioDto;
      const createdUser = this.userRepository.create({
        name: name.toUpperCase()
      });
      const dbUser = await this.userRepository.save(createUsuarioDto);
      return dbUser;
    } catch (error) {
      console.log(error);
      throw new Error(`Error creating user ${error}`)
    }
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  async findOne(id: number) {
    return await this.userRepository.findBy({ id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const { name } = updateUsuarioDto;
    try {
      const userToUpdate = await this.findOne(id);

      if (!userToUpdate) throw new Error(`User with id ${id} not found`);

      const updatedUser = await this.userRepository.update({
        id
      }, {
        name
      });
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user with id ${id}: ${error}`);
    }
  }

  remove(id: number) {
    const user = this.findOne(id);
    if (!user) throw new Error(`User with id ${id} not found`);
    return this.userRepository.delete({
      id
    });
  }
}
