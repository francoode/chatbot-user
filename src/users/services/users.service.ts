import { Injectable } from '@nestjs/common';
import {
  Client,
  ClientProxy
} from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.model';
import { logServiceClient } from '../helpers/helper';
import { UserAccessDto } from '../helpers/user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User) protected repository: Repository<User>;

  @Client(logServiceClient) logClient: ClientProxy;

  handleAccess = async (data: UserAccessDto) => {
    console.log('handleAccess');
    const { company, name } = data;
    const existsUser = await this.repository.findOneBy({ company, name });
    const user =
      existsUser || (await this.repository.create({ company, name }));

    this.logClient.emit('lol', { lol: 'lol' }).subscribe({
      next: (value) => {
        console.log('Evento emitido:', data);
        console.log(value);
      },
      error: (err) => console.error('Error al emitir evento:', err),
      complete: () => console.log('Evento emitido con exito:', data),
    });

    return user;
  };
}
