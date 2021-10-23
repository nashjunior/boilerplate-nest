import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { validate } from 'class-validator';
import { ScriptCaseService } from 'ScriptCase/script-case';
import CreateLoginDTO from '../create-login.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private scriptcaseService: ScriptCaseService,
  ) {}

  @Post('/')
  async login(@Body() loginData: CreateLoginDTO): Promise<{ token: string }> {
    await validate(loginData);

    const { matricula, senha } = loginData;

    const encryptedPassword = this.scriptcaseService.encodePassword(senha);

    const token = await this.authService.handleLogin({
      matricula,
      senha: encryptedPassword,
    });

    return { token };
  }
}
