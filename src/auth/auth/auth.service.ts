import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import AppError from 'src/app.exception';
import CreateLoginDTO from '../create-login.dto';
import UsuariosRepository from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private usuariosRepository: UsuariosRepository,

    private jwtService: JwtService,
  ) {}

  async handleLogin(userData: CreateLoginDTO): Promise<string> {
    const user = await this.usuariosRepository.findByMatricula(userData);

    if (!user)
      throw new AppError(
        'Usuario não encontrado ou senha inválida',
        HttpStatus.UNAUTHORIZED,
      );

    const token = this.jwtService.sign({
      id: user.usu_codigo,
    });
    return token;
  }
}
