import { Injectable } from '@angular/core';

import { DataOperation } from '../shared/services/data.operation';
import { DataService } from '../shared/services/data.service';

import { BrandData, ProductData } from '../shared/interfaces/index';

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

  public getBrands(uid: string, brand: string): Promise<BrandData[]> {
    let dataOperation = DataOperation.parse(uid, brand);

    return this.dataService.getList<BrandData[]>(dataOperation);
  }

  public getEquivalents(uid: string, product: string): Promise<ProductData[]> {
    let dataOperation = DataOperation.parse(uid, product);

    return this.dataService.getList<ProductData[]>(dataOperation);
  }

  // endregion Public methods

  // region Private methods

  // endregion Private methods

}
