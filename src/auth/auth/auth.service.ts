import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AppError from 'src/app.exception';
import CreateLoginDTO from '../create-login.dto';
import Usuario from '../usuario.entity';
import UsuariosRepository from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private usuariosRepository: UsuariosRepository,
  ) {}

  async handleLogin(userData: CreateLoginDTO): Promise<Usuario> {
    const user = await this.usuariosRepository.findByMatricula(userData);

    if (!user)
      throw new AppError(
        'Usuario não encontrado ou senha inválida',
        HttpStatus.UNAUTHORIZED,
      );

    return user;
  }
}
