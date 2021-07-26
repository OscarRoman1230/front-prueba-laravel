import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  URL_PIX = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';
  constructor(private http: HttpClient) {}

  getImages () {
    return this.http.get(this.URL_PIX);
  }

  searchImage (searchText: String) {
    return this.http.get(`${this.URL_PIX}&lang=es&q=${searchText}`);
  }
}
