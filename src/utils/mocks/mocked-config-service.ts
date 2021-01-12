export const mockedConfigService = {
  get(key: string): string {
    switch (key) {
      case 'JWT_ACCESS_TOKEN_SECRET':
        return 'top-secret-access';
      case 'JWT_ACCESS_TOKEN_EXPIRATION_TIME':
        return '240s';
      case 'JWT_REFRESH_TOKEN_SECRET':
        return 'top-secret-refresh';
      case 'JWT_REFRESH_TOKEN_EXPIRATION_TIME':
        return '200s';
    }
  },
};
