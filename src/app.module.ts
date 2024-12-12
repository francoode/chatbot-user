import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';
import { User } from './users/entities/user.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    SharedModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: Number(3306),
      username: 'root',
      password: 'appmodule',
      database: 'chat_bot',
      entities: [User],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
