import { Transport } from '@nestjs/microservices';

export const microserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [
      `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_NODENAME}:${process.env.RABBITMQ_FIRST_HOST_PORT}/${process.env.RABBITMQ_DEFAULT_VHOST}`,
    ],
    queue: 'auth_queue',
    queueOptions: {
      durable: false,
    },
  },
};
