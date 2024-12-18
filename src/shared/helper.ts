import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export const emitSyncEvent = async (params: { client: ClientProxy; event: string; body: any }) => {
	try {
		const { client, event, body } = params;
		await firstValueFrom(client.emit(event, body));
		return true;
	} catch (err) {
		throw err;
	}
};
