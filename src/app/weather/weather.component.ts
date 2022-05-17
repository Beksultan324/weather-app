import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherSearchForm: FormGroup;
  weatherData: any;
  date = new Date();
  dateAfterTwelweHorse = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
    this.dateAfterTwelweHorse.setHours(this.date.getHours() + 12);
    console.log(this.dateAfterTwelweHorse.getHours());
  }

  sendToAPIXU(formValues: string) {
    this.apixuService
      .getWeather(formValues)
      .subscribe((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
      this.weatherSearchForm.reset();
  }
}
