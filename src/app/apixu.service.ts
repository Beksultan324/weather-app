import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=9eca71f64bdc025c4c3c6a1f529d072c&query=' +
        location
    );
  }
}
