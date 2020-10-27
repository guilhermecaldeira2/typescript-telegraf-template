import Keyboard from '@Modules/Keyboard';
import { Composer } from 'telegraf';
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
type menuId = string;

class ComposerHandler {
  public name: string;
  public composer: Composer<any>;
  constructor(name: string) {
    this.name = name;
    this.composer = new Composer();
  }
  public get() {
    return this.composer;
  }
}

type firstHandler = (ctx: any) => any;

export class Menu {
  id: menuId;
  composers: ComposerHandler[];
  keyboard: Keyboard;
  firstHandler?: firstHandler;

  constructor(id: menuId, firstHandler?: firstHandler) {
    this.keyboard = new Keyboard();
    this.id = id;
    if (firstHandler) this.firstHandler = firstHandler;
  }

  registerComposer(composer: ComposerHandler) {
    const find = this.composers.find((el) => el.name);

    if (find) return;

    this.composers.push(composer);
  }
}

export class Wizard {
  constructor(id: menuId, composers: ComposerHandler[]) {
    const middlewares = composers.map((el) => el.composer);
    return new WizardScene(id, ...middlewares);
  }
}
