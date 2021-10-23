import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { validate } from 'class-validator';
import { ScriptCaseService } from 'ScriptCase/script-case';
import CreateLoginDTO from '../create-login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private scriptcaseService: ScriptCaseService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async login(@Body() loginData: CreateLoginDTO): Promise<{ token: string }> {
    await validate(loginData);

    const { matricula, senha } = loginData;

    const encryptedPassword = this.scriptcaseService.encodePassword(senha);

    const user = await this.authService.handleLogin({
      matricula,
      senha: encryptedPassword,
    });

    const token = this.jwtService.sign({
      id: user.usu_codigo,
    });

    return {
      token,
    };
  }
}
