import { Component, Input, OnInit } from '@angular/core';
import { PDMService } from './pdm.service';

import { ProductData } from '../shared/interfaces/index';

import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'equivalent-editor',
  templateUrl: 'equivalent.editor.html',
  providers: [PDMService]
})

export class EquivalentEditor implements OnInit {

  public equivalents: ProductData[] = [];

  private _product: ProductData;

  get product(): ProductData {
    return this._product;
  }

  @Input() set product(product: ProductData) {
    this._product = product;
    this.loadEquivalents();
  }

  constructor(private pdmService: PDMService) {

  }

  ngOnInit() {
    this.loadEquivalents();
  }

  // region Public methods

  // endregion Public methods

  // region Private methods

  private loadEquivalents(): void {
    this.pdmService.getEquivalents(this.product.id)
      .then(x => {
        this.equivalents = x;
      }).catch(err => {
        console.log(err);
      });
  }

  // endregion Private methods

} // EquivalentComponent
