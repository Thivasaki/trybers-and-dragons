import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private _energyType: EnergyType;
  private static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numberOfInstances += 1;
  }

  public static createdArchetypeInstances():number {
    return Mage._numberOfInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}