import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScriptCaseModule } from 'ScriptCase/script-case';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import UsuariosRepository from './auth/users.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [ScriptCaseModule, TypeOrmModule.forFeature([UsuariosRepository])],
})
export class AuthModule {}
