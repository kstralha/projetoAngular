import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOutputComponent } from './item-output/item-output.component';


const routes: Routes = [
  {path: 'conecta', component:ItemOutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
