import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { OldComponent } from './pages/old/old.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


// OLD STUF
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
import {ChartComponent} from './old/chart/chart.component';
import {TextInputComponent} from './old/text-input/text-input.component';
import {TextBlocComponent} from './old/text-bloc/text-bloc.component';
import {KeySizeComponent} from './old/key-size/key-size.component';
import {TabGroupComponent} from './old/tab-group/tab-group.component';
import {SummaryComponent} from './old/summary/summary.component';
import {TextEncryptionComponent} from './old/text-encryption/text-encryption.component';
import {TextDecryptionComponent} from './old/text-decryption/text-decryption.component';
import {IndexCoincidenceComponent} from './old/index-coincidence/index-coincidence.component';
import {KeyComponent} from './old/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    OldComponent,
    NotFoundComponent,
    // OLD Stuff
    ChartComponent,
    TextInputComponent,
    TextBlocComponent,
    KeySizeComponent,
    TabGroupComponent,
    SummaryComponent,
    TextEncryptionComponent,
    TextDecryptionComponent,
    IndexCoincidenceComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    HomeModule,
    // OLd STUF
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
