import { telegrafStage } from 'donato';
import BVW1M1 from './Menus/BV/BVW1M1';
import BVW1M2 from './Menus/BV/BVW1M2';
import BVW1M3 from './Menus/BV/BVW1M3';

const scenes = telegrafStage;

scenes.subscribeScene(BVW1M1);
scenes.subscribeScene(BVW1M2);
scenes.subscribeScene(BVW1M3);

export default scenes;
