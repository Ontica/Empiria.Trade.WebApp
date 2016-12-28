import { BaseObjectData } from '../interfaces/base.object';

export interface ContentUnitData extends BaseObjectData {
  name: string;
  pluralName: string;
  abbreviation: string;
}
