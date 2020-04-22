import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl = 'https://api.github.com/search/users?q=';
  userUrl = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }


  getAllUsers(search, page = 1) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Headers", "X-Requested-With")
    return this.http.get(`${this.apiUrl}${search}&per_page=10&page=${page}`, { headers: headers }).toPromise();
  }


  getUser(login) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Headers", "X-Requested-With")
    return this.http.get(`${this.userUrl}${login}`, { headers: headers }).toPromise();
  }


}

