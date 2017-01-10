import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modal-window',
  templateUrl: 'modal-window.component.html',
  styleUrls: ['modal-window.component.css']

})
export class ModalWindow {

   @Output() onClose: EventEmitter<any> = new EventEmitter();

   @Input() visible: boolean = false;

   public close() {
     this.visible = false;
     this.onClose.next(null);
   }

   public show() {
      this.visible = true;
   }

}  // class ModalWindow
