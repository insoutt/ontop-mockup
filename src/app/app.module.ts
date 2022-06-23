import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    ButtonComponent,
    SearchInputComponent,
    SelectComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
