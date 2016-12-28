import { BaseObjectData } from '../interfaces/base.object';

export interface PresentationUnitData extends BaseObjectData {
  name: string;
  pluralName: string;
  abbreviation: string;
}
