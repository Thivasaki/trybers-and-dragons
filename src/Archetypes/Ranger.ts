import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private _energyType: EnergyType;
  private static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._numberOfInstances += 1;
  }

  public static createdArchetypeInstances():number {
    return Ranger._numberOfInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}