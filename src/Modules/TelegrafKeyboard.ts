import { Markup } from 'telegraf';
import { KeyboardButton } from 'telegraf/typings/markup';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

type genericTextButtons = 'previousMenu' | 'exit';

enum genericLabelButtonsEnum {
  exit = 'Sair',
  previousMenu = 'Voltar ao menu anterior',
}

export class TelegrafKeyboard {
  private markup = (buttons: KeyboardButton[][] | KeyboardButton[]): ExtraReplyMessage =>
    Markup.keyboard(buttons).oneTime().resize().extra();

  public remove = () => Markup.removeKeyboard();

  public create = (text: string[], genericTextButtons?: genericTextButtons[]) => {
    if (!genericTextButtons) genericTextButtons = [];
    const answersButtons = Array.from(text, (x) => Array.of(x));
    const genericLabelButtons = genericTextButtons.map((el) => genericLabelButtonsEnum[el]);
    const genericButtons = Array.from(genericLabelButtons, (x) => Array.of(x));

    return this.markup([...answersButtons, ...genericButtons]);
  };
}
