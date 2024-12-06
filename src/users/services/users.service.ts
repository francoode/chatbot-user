import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.model';
import { UserAccessDto } from '../helpers/user.dto';

@Injectable()
export class UsersService {
    //@InjectRepository(User) protected repository: Repository<User>;

    handleAccess = async (data: UserAccessDto) => {
        return {'hola': 'mundo'}
        /* const {company, name} = data;
        const existsUser = await this.repository.findOneBy({company, name});
        if(existsUser) return existsUser;

        return this.repository.create({company, name}); */
    }
}
