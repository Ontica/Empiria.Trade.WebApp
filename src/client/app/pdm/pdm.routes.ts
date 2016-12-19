import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCatalogue } from './product.catalogue';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductCatalogue, pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class PDMRoutingModule { }
