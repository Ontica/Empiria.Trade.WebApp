import { BaseObjectData } from '../interfaces/base.object';

export interface BrandData extends BaseObjectData {
  name: string;
  uniqueCode: string;
  status: string;
}
