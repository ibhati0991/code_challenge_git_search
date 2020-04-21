import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient, ) { }


  getAllUsers(search) {
    return this.http.get(`${this.apiUrl}${search}`).toPromise();
  }

  getUrl(url) {
    return this.http.get(url).toPromise();
  }


}

