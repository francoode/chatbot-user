import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		}),
	);

	/* app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.RMQ,
		options: {
			urls: ['amqp://user:password@rabbitmq:5672'],
			queue: 'USER_QUEUE',
		},
	}); */

	await app.startAllMicroservices();
	await app.listen(3000);
}
bootstrap();
