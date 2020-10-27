import { Composer } from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';
import { TelegrafKeyboard } from './TelegrafKeyboard';
const WizardScene = require('telegraf/scenes/wizard/');

/*
  Como compor um id:
  Primeira Letra do nome do Tema
    Ex: Bem vindo => BV
  Letra W seguido do número do wizard de cada fluxo dentro do Tema
    Ex: BVW1
  Letra M seguido do número do menu dentro do Wizard
    Ex: BVW1M1

*/
export type menuId = string;
export type composer = Composer<TelegrafContext>;
export type fistHandler = (ctx: any) => any;

export class TelegrafMenu {
  private id: menuId;
  public keyboard: TelegrafKeyboard;
  public firstHandler: fistHandler;
  public composer = new Composer();

  public subscribeComposer: () => void;

  constructor(id: menuId) {
    this.keyboard = new TelegrafKeyboard();
    this.id = id;
  }

  private createWizard = (fistHandler: fistHandler, composer?: composer) => {
    if (composer) return new WizardScene(this.id, fistHandler, composer);
    return new WizardScene(this.id, fistHandler);
  };

  public getId = () => this.id;

  public init = (): typeof WizardScene => {
    if (!this.firstHandler) throw new Error('Need to create a firstHandler');
    if (this.subscribeComposer) {
      this.subscribeComposer();
      return this.createWizard(this.firstHandler, this.composer);
    }
    return this.createWizard(this.firstHandler);
  };
}
