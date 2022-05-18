import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { allAppRoutes } from './routes';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { DateToEmojiPipe } from './shared/pipes/date-to-emoji/date-to-emoji.pipe';
import { PhoneNumberPipe } from './shared/pipes/phone-number/phone-number.pipe';
import { MarkDirective } from './shared/directives/mark.directive';
import { GetNAPipe } from './shared/pipes/get-N_A/get-n-a.pipe';

@NgModule({
  declarations: [AppComponent, WeatherComponent, DateToEmojiPipe, PhoneNumberPipe, MarkDirective, GetNAPipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
