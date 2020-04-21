import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { PagerService } from './pager.service';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService, PagerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
