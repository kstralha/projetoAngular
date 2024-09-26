import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { SobreComponent } from './sobre/sobre.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';  





@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemTesteComponent,
    SobreComponent,
    ItemDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
