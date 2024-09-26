import { Component } from '@angular/core';

@Component({
  selector: 'appAng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = "Curriculo";
  itens = ['Batata Frita', 'Hamburguer', 'Milk Shake'];
  addItem(newItem: string) {
    this.itens.push(newItem);
  }
}
