import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpDataService } from './services/http.data.service';
import { DataService } from './services/data.service';

import { ModalWindow } from './windows/modal-window.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ModalWindow],
  exports: [CommonModule, FormsModule, RouterModule, ModalWindow]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpDataService, DataService]
    };
  }

}
