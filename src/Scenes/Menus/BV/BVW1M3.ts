import { TelegrafMenu } from 'donato';

class BVW1M3 extends TelegrafMenu {
  firstHandler = async (ctx: any) => {
    await ctx.reply(
      `Confirma CPF ${ctx.session.cpf}?`,
      this.keyboard.create(['Sim', 'Não'], ['exit'])
    );
    ctx.wizard.next();
  };

  subscribeComposer = () => {
    this.composer.hears(/[Sim|Não]/gi, async (ctx: any) => {
      [ctx.session.confirma] = ctx.match;
      await ctx.reply('Obrigado pelas informações!');
    });
    this.composer.use((ctx) => {
      ctx.reply('Selecione ou digite, Sim ou Não.');
    });
  };
}

export default new BVW1M3('BVW1M3').init();
