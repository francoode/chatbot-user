import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.model';
import { UserAccessDto } from '../helpers/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
	@InjectRepository(User) protected repository: Repository<User>;

	handleAccess = async (data: UserAccessDto) => {
		const { company, name } = data;
		const existsUser = await this.repository.findOneBy({ company, name });
		const user = existsUser || (await this.repository.create({ company, name }));
		return { eventId: uuidv4(), user };
	};
}
