import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/user.model';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User]),
    ConfigModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [
    //TypeOrmModule
  ],
})
export class UsersModule {}
