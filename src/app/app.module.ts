import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item-list/item/item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ContextService } from './services/context.service';
import { ShekelPipe } from './pipes/shekel.pipe';
import { PhoneStylePipe } from './pipes/phone-style.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemAddComponent,
    ShekelPipe,
    PhoneStylePipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [
    ContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
