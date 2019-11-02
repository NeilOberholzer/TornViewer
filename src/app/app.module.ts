import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TornModule } from './torn/torn.module';
import { routing } from './app.routing';
import { TornService } from './torn/torn.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TornModule,
    routing
  ],
  providers: [TornService],
  bootstrap: [AppComponent]
})
export class AppModule { }
