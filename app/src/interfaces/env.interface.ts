export interface IEnvironment {
  database: {
    url: string;
    name: string;
    collections: {
      users: string;
      events: string;
    };
  };
  jwt: {
    secret: string;
    accessTokenExp: string;
    refreshTokenExp: string;
  };
  application: {
    port: number;
  };
}
