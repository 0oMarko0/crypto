import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MonoalphabeticComponent } from './pages/monoalphabetic/monoalphabetic.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { OldComponent } from './pages/old/old.component';
import { ChartComponent } from './old/chart/chart.component';
import { TextInputComponent } from './old/text-input/text-input.component';
import { TextBlocComponent } from './old/text-bloc/text-bloc.component';
import { KeySizeComponent } from './old/key-size/key-size.component';
import { TabGroupComponent } from './old/tab-group/tab-group.component';
import { SummaryComponent } from './old/summary/summary.component';
import { TextEncryptionComponent } from './old/text-encryption/text-encryption.component';
import { TextDecryptionComponent } from './old/text-decryption/text-decryption.component';
import { IndexCoincidenceComponent } from './old/index-coincidence/index-coincidence.component';
import { KeyComponent } from './old/key/key.component';
import { HomeComponent } from './modules/home/page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TextInputComponent,
    TextBlocComponent,
    KeySizeComponent,
    TabGroupComponent,
    SummaryComponent,
    TextEncryptionComponent,
    TextDecryptionComponent,
    IndexCoincidenceComponent,
    KeyComponent,
    MonoalphabeticComponent,
    NotFoundComponent,
    OldComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
