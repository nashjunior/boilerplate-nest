import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { validate } from 'class-validator';
import { ScriptCaseService } from 'ScriptCase/script-case';
import CreateLoginDTO from '../create-login.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private scriptcaseService: ScriptCaseService,
  ) {}

  @Post()
  async login(
    @Body() loginData: CreateLoginDTO,
    @Res() response: Response,
  ): Promise<void> {
    await validate(loginData);

    const { matricula, senha } = loginData;

    const [encryptedPassword, user] = await Promise.all([
      this.scriptcaseService.encodePassword(senha),
      this.authService.findUser(matricula),
    ]);

    if (!user)
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Usuario não encontrado ou senha inválida' });

    if (user.usu_senha !== encryptedPassword)
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Usuario não encontrado ou senha inválida' });
  }
}
