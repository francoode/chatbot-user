import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.model';
import { Repository } from 'typeorm';
import { BaseCrudService } from 'src/shared/services/base-crud.service';

@Injectable()
export class UsersService extends BaseCrudService<User> {
    @InjectRepository(User) protected repository: Repository<User>;

    handleUserAccess = (data: {}) => {

    }
}
