import { Sequelize } from 'sequelize';
import * as env from '@Config/config.json';

class Connection {
  private instance: Sequelize;

  private sequelize(): Sequelize {
    if (!this.instance) {
      this.instance = new Sequelize(
        env.postgres.DATABASE,
        env.postgres.USER,
        env.postgres.PASSWORD,
        {
          host: env.postgres.HOST,
          port: env.postgres.PORT,
          dialect: 'postgres',
          pool: {
            max: 50,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        }
      );
    }
    return this.instance;
  }

  public async connect() {
    if (!this.instance) {
      this.sequelize();
    }
    return this.instance.authenticate();
  }
}

export default Connection;
