export const mockedConfigService = {
  get(key: string): string | number {
    switch (key) {
      case 'POSTGRES_USERNAME':
        return 'postgres_user';
      case 'POSTGRES_PASSWORD':
        return 'postgres_password';
      case 'POSTGRES_DATABASE':
        return 'item';
      case 'POSTGRES_PORT':
        return 5433;
      case 'POSTGRES_HOST':
        return 'localhost';
      case 'RABBITMQ_DEFAULT_USER':
        return 'rabbitmq';
      case 'RABBITMQ_DEFAULT_PASS':
        return 'rabbitmq';
      case 'RABBITMQ_DEFAULT_VHOST':
        return 'otasoft-api';
      case 'RABBITMQ_NODENAME':
        return 'localhost';
      case 'RABBITMQ_FIRST_HOST_PORT':
        return 5673;
    }
  },
};
