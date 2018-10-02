import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { TextInputComponent } from './text-input/text-input.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TextBlocComponent } from './text-bloc/text-bloc.component';
import { KeySizeComponent } from './key-size/key-size.component';
import { MatCardModule } from '@angular/material/card';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TextInputComponent,
    TextBlocComponent,
    KeySizeComponent,
    TabGroupComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }