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
import { SwitchComponent } from './directives/switch/switch.component';
import { ContainerComponent } from './directives/switch/container/container.component';
import { ParentComponent } from './directives/workingWithTemplates/parent/parent.component';
import { ChildComponent } from './directives/workingWithTemplates/parent/child/child.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, DateToEmojiPipe, PhoneNumberPipe, MarkDirective, GetNAPipe, SwitchComponent, ContainerComponent, ParentComponent, ChildComponent],
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
