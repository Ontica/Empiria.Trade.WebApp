import { BaseObjectData } from '../interfaces/base.object';

export interface VehicleModel extends BaseObjectData {
  fromYear: number;
  toYear: number;
  make: string;
  model: string;
  engine: string;
  asText: string;
  notes: string;
  description: string;
}
