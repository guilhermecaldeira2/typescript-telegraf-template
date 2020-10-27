import { Telegraf, session, Stage } from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';

import * as env from '@Config/config.json';
import scenes from '@Scenes/index';
import Connection from './Connection';
// import { exit } from '@Scenes/Middlewares/Generic';

class App {
  private bot: Telegraf<TelegrafContext>;

  private connection: Connection;

  constructor() {
    this.bot = new Telegraf(env.TELEGRAM_TOKEN);
    this.connection = new Connection();
  }

  databaseConnection = async (): Promise<void> => {
    return this.connection.connect();
  };

  handleBot = (): Promise<void> => {
    this.bot.use(session());
    this.bot.use(scenes.subscribeStage().middleware());

    // this.bot.hears('Sair', exit);

    this.bot.start(async (ctx: any) => {
      ctx.session.history = [];
      ctx.scene.enter('BVW1M1');
    });

    this.bot.hears(/Oi/gi, async (ctx: any) => {
      ctx.session.history = [];
      ctx.scene.enter('BVW1M1');
    });

    return this.bot.launch();
  };

  init = async () => {
    try {
      // await this.databaseConnection();
      await this.handleBot();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
}

export default new App().init();
