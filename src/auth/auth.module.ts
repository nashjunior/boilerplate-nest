import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScriptCaseModule } from 'ScriptCase/script-case';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import UsuariosRepository from './auth/users.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ScriptCaseModule,
    TypeOrmModule.forFeature([UsuariosRepository]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secretOrPrivateKey: process.env.APP_SECRET,
        signOptions: {
          expiresIn: 18000,
        },
      }),
    }),
  ],
})
export class AuthModule {}
