import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
/*import { MatDatepickerModule } from '@angular/material/datepicker';*/
import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    /*MatNativeDateModule,
    MatDatepickerModule*/
  ],
   /*exports: [
    MatNativeDateModule,
    MatDatepickerModule
  ],*/
  declarations: [AppComponent, DialogContentComponent],
  /*providers: [MatDatepickerModule],*/
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
