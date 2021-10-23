import { Body, Controller, HttpStatus, Post } from '@nestjs/common';

import { validate } from 'class-validator';
import { ScriptCaseService } from 'ScriptCase/script-case';
import AppError from 'src/app.exception';
import CreateLoginDTO from '../create-login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private scriptcaseService: ScriptCaseService,
  ) {}

  @Post()
  async login(@Body() loginData: CreateLoginDTO): Promise<void> {
    await validate(loginData);

    const { matricula, senha } = loginData;

    const encryptedPassword = this.scriptcaseService.encodePassword(senha);

    const user = await this.authService.findUser({
      matricula,
      senha: encryptedPassword,
    });

    if (!user)
      throw new AppError(
        'Usuario não encontrado ou senha inválida',
        HttpStatus.UNAUTHORIZED,
      );

    if (user.usu_senha !== encryptedPassword)
      throw new AppError(
        'Usuario não encontrado ou senha inválida',
        HttpStatus.UNAUTHORIZED,
      );
  }
}
