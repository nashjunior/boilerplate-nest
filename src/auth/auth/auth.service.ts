import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Usuario from '../usuario.entity';
import UsuariosRepository from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private usuariosRepository: UsuariosRepository,
  ) {}

  async findUser(matricula: string): Promise<Usuario> {
    return this.usuariosRepository.findByMatricula(matricula);
  }
}
