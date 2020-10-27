import { TelegrafMenu } from 'donato';

class BVW1M1 extends TelegrafMenu {
  firstHandler = async (ctx: any) => {
    await ctx.reply('Olá Digite seu nome: ');
    ctx.wizard.next();
  };

  subscribeComposer = () => {
    this.composer.hears(/(\w+)/gi, async (ctx: any) => {
      await ctx.reply(`Olá ${ctx.match[0]}`);
      ctx.scene.enter('BVW1M2');
    });
    this.composer.use((ctx) => {
      ctx.reply('Digite seu nome');
    });
  };
}

export default new BVW1M1('BVW1M1').init();
