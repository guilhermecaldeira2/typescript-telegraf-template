import { TelegrafMenu } from 'donato';

class BVW1M2 extends TelegrafMenu {
  firstHandler = (ctx: any) => {
    ctx.reply('Agora digite seu CPF: ');
    ctx.wizard.next();
  };

  subscribeComposer = () => {
    this.composer.hears(/(\d{11})/gi, async (ctx: any) => {
      [ctx.session.cpf] = ctx.match;
      ctx.scene.enter('BVW1M3');
    });
    this.composer.use((ctx) => {
      ctx.reply('Digite seu cpf apenas com dígitos.');
    });
  };
}

export default new BVW1M2('BVW1M2').init();
