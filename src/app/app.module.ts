import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Page4Component } from './page4/page4.component';
import { EditComponent } from './edit/edit.component';
import { RoleComponent } from './role/role.component';
import { MultiComponent } from './multi/multi.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MyDatePickerModule } from 'mydatepicker';
import { SearchPipe } from './search.pipe';
import {DataTableModule} from 'angular-6-datatable';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuItem} from 'primeng/api';
declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  // const hs = require('highcharts/highstock');
  const ex = require('highcharts/modules/exporting');
  // const h3 = require('highcharts/highchart-3d');
  dd(hc);
  ex(hc);
  // hs(hc);
  // h3(hc);
  return hc;
  }


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    EditComponent,
    RoleComponent,
    MultiComponent,
    SearchPipe,
    BootstrapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    MyDatePickerModule,
    DataTableModule,
    AngularFontAwesomeModule,
    ChartModule,
    FullCalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
