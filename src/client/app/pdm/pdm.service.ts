import { Injectable } from '@angular/core';

import { DataOperation } from '../shared/services/data.operation';
import { DataService } from '../shared/services/data.service';

import {
  BrandData, CategoryData, ProductData, PairValue, ProductTermData,
  SubcategoryData, TraderData, VehicleModel
} from '../shared/interfaces/index';

import 'rxjs/Rx';

@Injectable()
export class PDMService {

  constructor(private dataService: DataService) {

  }

  // region Public methods

  public getProducts(uid: string, product: string): Promise<ProductData[]> {
    let dataOperation = DataOperation.parse(uid, product);

    return this.dataService.getList<ProductData[]>(dataOperation);
  }

  public getYears(): Promise<string[]> {
    let dataOperation = DataOperation.parse('getYears');

    return this.dataService.getList<string[]>(dataOperation);
  }

  public getMakes(year: number): Promise<string[]> {
    let dataOperation = DataOperation.parse('getMakes', year);

    return this.dataService.getList<string[]>(dataOperation);
  }

  public getModels(year: number, make: string): Promise<string[]> {
    let dataOperation = DataOperation.parse('getModels', year, make);

    return this.dataService.getList<string[]>(dataOperation);
  }

  public getEngines(year: number, make: string, model: string): Promise<PairValue[]> {
    let dataOperation = DataOperation.parse('getEngines', year, make, model);

    return this.dataService.getList<PairValue[]>(dataOperation);
  }

  public getVehicleModel(engineId: number): Promise<VehicleModel> {
    let dataOperation = DataOperation.parse('getVehicleModel', engineId);

    return this.dataService.getList<VehicleModel>(dataOperation);
  }

  public getEquivalents(productId: number): Promise<ProductData[]> {
    let dataOperation = DataOperation.parse('getEquivalents', productId);

    return this.dataService.getList<ProductData[]>(dataOperation);
  }

  public getProductCategories(): Promise<CategoryData[]> {
    let dataOperation = DataOperation.parse('getProductCategories');

    return this.dataService.getList<CategoryData[]>(dataOperation);
  }

  public getProductSubcategories(categoryId: number): Promise<SubcategoryData[]> {
    let dataOperation = DataOperation.parse('getProductSubcategories', categoryId);

    return this.dataService.getList<SubcategoryData[]>(dataOperation);
  }

  public getProductTerms(subCategoryId: number): Promise<ProductTermData[]> {
    let dataOperation = DataOperation.parse('getProductTerms', subCategoryId);

    return this.dataService.getList<ProductTermData[]>(dataOperation);
  }

  public getBrands(): Promise<BrandData[]> {
    let dataOperation = DataOperation.parse('getBrands');

    return this.dataService.getList<BrandData[]>(dataOperation);
  }

  public getTraders(): Promise<TraderData[]> {
    let dataOperation = DataOperation.parse('getTraders');

    return this.dataService.getList<TraderData[]>(dataOperation);
  }

  // endregion Public methods

  // region Private methods

  // endregion Private methods

}
