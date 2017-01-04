import { Component } from '@angular/core';
import { PDMService } from './pdm.service';

import { ProductData } from '../shared/interfaces/index';

import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'product-catalog',
  templateUrl: 'product.catalogue.html',
  providers: [PDMService]
})

export class ProductCatalogue {

  products: ProductData[] = [];
  public submitted = false;
  public searchValue: string = '';

  constructor(private pdmService: PDMService) {

  }

  // region Public methods

  public search(): void {
    this.getProducts(this.searchValue);
  }


  public onGoogleSearchProduct(productPartNumber: string): void {
    window.open('https://www.google.com/search?q=' + productPartNumber);
  }

  // endregion Public methods

  // region Private methods

  private getProducts(searchValue: string): void {
    this.pdmService.getProducts('getPDMProductsList', searchValue)
      .then(x => {
        this.products = x;
        this.submitted = true;
        // this.loadResults(x);    
      }).catch(err => {
        console.log(err);
      });

  }

  // endregion Private methods

}  //ProductCatalogue
