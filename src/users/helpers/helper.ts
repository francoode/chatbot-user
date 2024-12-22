
import { ClientOptions } from "@nestjs/microservices";

export const logQueue: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: 'LOG_QUEUE',
  },
};

export const chatQueue: ClientOptions = {
  transport: 5,
  options: {
    urls: [`amqp://user:password@rabbitmq:5672`],
    queue: 'CHAT_QUEUE',
  },
};

