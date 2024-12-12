import { ClientOptions } from "@nestjs/microservices";

export const logServiceClient: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: `logs_queue`,
  },
};
