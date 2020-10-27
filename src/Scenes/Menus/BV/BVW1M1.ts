import { TelegrafMenu } from '@Modules/Menu';
import telegrafScene from '@Modules/Stage';

class BVW1M1 extends TelegrafMenu {
  firstHandler = (ctx: any) => {
    ctx.reply('Olá, digite seu username');
    ctx.wizard.next();
  };

  subscribeComposer = () => {
    this.composer.hears(/([a-zA-Z])+/gi, (ctx: any) => {
      ctx.reply(`E ai AGAIN ${ctx.match[0]}`);
    });
    this.composer.use((ctx: any) => {
      ctx.reply('fala logo mermão');
    });
  };
}

export default telegrafScene.subscribeScene(new BVW1M1('BVW1M1').init());
