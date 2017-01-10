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

  equivalents: ProductData[] = [];
  @Input() product: ProductData;

  constructor(private pdmService: PDMService) {

  }

  ngOnInit() {
    this.getEquivalents();
  }

  // region Public methods

  // endregion Public methods

  // region Private methods

  private getEquivalents(): void {
    this.pdmService.getProducts('getPDMProductsList', 'ffasfas3ee')
      .then(x => {
        this.equivalents = x;
      }).catch(err => {
        console.log(err);
      });
  }

  // endregion Private methods

} // EquivalentComponent
