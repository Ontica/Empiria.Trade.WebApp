import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PDMRoutingModule } from './pdm.routes';

import { ProductCatalogue } from './product.catalogue';
import { EquivalentEditor } from './equivalent.editor';
import { VehicleModelPicker } from './vehicle-model.picker';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [CommonModule, PDMRoutingModule, SharedModule],
  declarations: [ProductCatalogue, EquivalentEditor, VehicleModelPicker],
  exports: [ProductCatalogue],

})
export class PDMModule { }
