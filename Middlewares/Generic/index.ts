import historyManager from '@Scenes/Middlewares/History';
import Keyboard from '@Modules/Keyboard';

const configs = {
  keyboard: new Keyboard(),
};

export const exit = async (ctx: any) => {
  ctx.session.history = [];
  await ctx.replyWithMarkdown(
    'Sua sessão foi finalizada. Quando precisar é só me dizer um *"Oi"* ou *"/start"*!',
    configs.keyboard.remove()
  );
  await ctx.scene.leave();
};

export const previousMenu = async (ctx: any) => {
  const prev = historyManager(ctx.session.history, 'prev');
  if (!prev) return;
  ctx.scene.enter(prev);
};
