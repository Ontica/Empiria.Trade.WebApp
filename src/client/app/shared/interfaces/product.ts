import { BaseObjectData } from '../interfaces/base.object';
import {
  ProductTermData, BrandData, ManufacturerData, CategoryData, SubcategoryData,
  PresentationUnitData, ContentUnitData
} from './index';

export interface ProductData extends BaseObjectData {
  category: CategoryData;
  subcategory: SubcategoryData;
  productTerm: ProductTermData;
  manufacturer: ManufacturerData;
  brand: BrandData;
  partNumber: string;
  name: string;
  searchTags: string;
  description: string;
  notes: string;
  presentationUnit: PresentationUnitData;
  contentQty: number;
  contentUnit: ContentUnitData;
  startDate: Date;
  lastUpdated: Date;
  manager: any;
  baseProductId: number;
}
