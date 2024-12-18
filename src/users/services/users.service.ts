import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.model';
import { logServiceClient } from '../helpers/helper';
import { UserAccessDto } from '../helpers/user.dto';
import { Subscription, firstValueFrom } from 'rxjs';
import { emitSyncEvent } from 'src/shared/helper';

@Injectable()
export class UsersService {
	@InjectRepository(User) protected repository: Repository<User>;

	@Client(logServiceClient) logClient: ClientProxy;

	handleAccess = async (data: UserAccessDto) => {
		const { company, name } = data;
		const existsUser = await this.repository.findOneBy({ company, name });
		const user = existsUser || (await this.repository.create({ company, name }));

		await emitSyncEvent({ client: this.logClient, body: { user }, event: 'lol' });

		return user;
	};
}
