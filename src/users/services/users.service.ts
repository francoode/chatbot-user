import { Injectable } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { emitSyncEvent } from 'src/shared/helper';
import { Repository } from 'typeorm';
import { User } from '../entities/user.model';
import { chatQueue, logQueue } from '../helpers/helper';
import { UserAccessDto } from '../helpers/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
	@InjectRepository(User) protected repository: Repository<User>;

	@Client(logQueue) logQueue: ClientProxy;
	@Client(chatQueue) chatQueue: ClientProxy;

	handleAccess = async (data: UserAccessDto) => {
		const { company, name } = data;
		const existsUser = await this.repository.findOneBy({ company, name });
		const user = existsUser || (await this.repository.create({ company, name }));

		/* await emitSyncEvent({
			client: this.logQueue,
			body: { user },
			event: CHAT_USER_CHECK_EXISTS,
		}); */

		/* await emitSyncEvent({
			client: this.chatQueue,
			body: { user },
			event: 'CHAT_USER_CHECK_EXISTS',
		}); */

		return { eventId: uuidv4(), user };
	};
}
