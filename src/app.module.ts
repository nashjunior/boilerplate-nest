import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import Usuario from './auth/usuario.entity';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Usuario],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
