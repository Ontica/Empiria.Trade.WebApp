import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogue } from './product.catalogue';
import { PDMRoutingModule } from './pdm.routes';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [CommonModule, PDMRoutingModule, SharedModule],
  declarations: [ProductCatalogue],
  exports: [ProductCatalogue],

})
export class PDMModule { }
