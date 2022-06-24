import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ChatComponent } from './components/chat/chat.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { DateInputComponent } from './components/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    ButtonComponent,
    SearchInputComponent,
    SelectComponent,
    TableComponent,
    StatusBadgeComponent,
    ActionsComponent,
    ChatComponent,
    NavbarItemComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
