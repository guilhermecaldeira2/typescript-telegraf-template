import { Stage } from 'telegraf';
const WizardScene = require('telegraf/scenes/wizard/');

class TelegrafStage {
  private wizards: typeof WizardScene[];
  private stage: Stage<any>;

  constructor() {
    this.wizards = [];
  }

  subscribeScene = (telegrafWizard: typeof WizardScene) => {
    this.wizards.push(telegrafWizard);
  };

  subscribeStage = (): Stage<any> => {
    console.log('Inscreveu as scenes: ', this.wizards);
    this.stage = new Stage(this.wizards);
    return this.stage;
  };
}

export default new TelegrafStage();
