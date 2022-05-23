import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';

@NgModule({
 declarations: [
   AppComponent,
   CustomTooltipComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   AgGridModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }