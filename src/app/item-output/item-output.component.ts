import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css'],
})
export class ItemOutputComponent {
  @Output() output = new EventEmitter<string>();
  addNewItem(value: string) {
    this.output.emit(value);
  }  
}
