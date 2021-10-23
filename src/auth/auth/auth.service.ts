import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateLoginDTO from '../create-login.dto';
import Usuario from '../usuario.entity';
import UsuariosRepository from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private usuariosRepository: UsuariosRepository,
  ) {}

  async findUser(userData: CreateLoginDTO): Promise<Usuario> {
    return this.usuariosRepository.findByMatricula(userData);
  }
}
