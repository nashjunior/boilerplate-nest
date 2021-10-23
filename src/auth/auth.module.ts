import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScriptCaseModule } from 'ScriptCase/script-case';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import UsuariosRepository from './auth/users.repository';
import JwtStrategyService from './jwt-strategy/jwt-strategy.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
  imports: [
    ScriptCaseModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secretOrKey: process.env.APP_SECRET,
        signOptions: {
          expiresIn: 18000,
        },
      }),
    }),
    TypeOrmModule.forFeature([UsuariosRepository]),
  ],
})
export class AuthModule {}
